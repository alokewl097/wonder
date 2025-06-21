const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');


router.get('/profile', auth, (req, res) => {
  res.json({
    message: 'Protected route accessed',
    user: req.user
  });
});

router.get('/users/:username', async (req, res) => {
  try {
    const { username } = req.params;

    // Find the starting user
    const rootUser = await User.findOne({ username });
    if (!rootUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Fetch all users
    const users = await User.find().lean();
    const userMap = {};
    users.forEach(u => {
      userMap[u._id.toString()] = u;
    });

    // Helper to build hierarchy string
    const buildHierarchy = (user) => {
      const hierarchy = [];
      let current = user;
      while (current.parent_user_id) {
        const parent = userMap[current.parent_user_id.toString()];
        if (!parent) break;
        hierarchy.unshift(parent.username);
        current = parent;
      }
      return hierarchy.join('/');
    };

    // Find all downstream users
    const downstreamUsers = [];
    const queue = [rootUser._id.toString()];

    while (queue.length) {
      const parentId = queue.shift();
      const children = users.filter(u => u.parent_user_id?.toString() === parentId);
      children.forEach(child => {
        downstreamUsers.push(child);
        queue.push(child._id.toString());
      });
    }

    // Format response
    const result = downstreamUsers.map(u => {
      const { password, ...rest } = u;
      return {
        ...rest,
        hierarchy_username: buildHierarchy(u)
      };
    });

    res.status(200).json({
      root: rootUser.username,
      downstream_count: result.length,
      users: result
    });

  } catch (err) {
    console.error('Fetch downstream users error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
