const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const router = express.Router();

// ✅ Login Route with JWT
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ message: 'Username and password are required' });

    const user = await User.findOne({ username });
    if (!user)
      return res.status(401).json({ message: 'Invalid username or password' });


    const isMatch = await bcrypt.compare(password, user.password);
    
    
    if (!isMatch)
      return res.status(401).json({ message: 'Invalid username or password' });

    // ✅ Create JWT Token
    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN } // 24h
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        role: user.role,
        name: `${user.firstName} ${user.lastName}`,
      }
    });

  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/register', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      username,
      password,
      confirmPassword,
      creatorPassword,
      role,
      parent_user_id // this is still username coming from client
    } = req.body;

    if (!firstName || !lastName || !username || !password || !creatorPassword || !role || !parent_user_id) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: 'Passwords do not match' });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const creator = await User.findOne({ email: 'owner@gmail.com', role: 1 });
    if (!creator) {
      return res.status(403).json({ message: 'Creator not found or unauthorized' });
    }

    const creatorMatch = await bcrypt.compare(creatorPassword, creator.password);
    if (!creatorMatch) {
      return res.status(403).json({ message: 'Invalid creator password' });
    }

    // ✅ Fetch parent user
    const parentUser = await User.findOne({ username: parent_user_id });
    if (!parentUser) {
      return res.status(400).json({ message: 'Parent user not found' });
    }

    const expectedParentRole = role - 1;
    if (parentUser.role !== expectedParentRole) {
      return res.status(400).json({
        message: `Parent user must have role ${expectedParentRole} (your parent user has role ${parentUser.role})`
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      phoneNumber,
      email,
      username,
      password: hashedPassword,
      role,
      parent_user_id: parentUser._id // ✅ Save parent’s ObjectId
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });

  } catch (err) {
    console.error('Register error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});




module.exports = router;
