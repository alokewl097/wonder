import React, { useState } from 'react';
import API from '../../apis/axiosInstance';
 

const Modal = ({ isOpen, onClose }) => {
    
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    creatorPassword: '',
  });

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const whiteLableHandler = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setMessageType('error');
      setMessage('Passwords do not match.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        username: formData.username,
        password: formData.password,
        confirmPassword:formData.confirmPassword,
        creatorPassword: formData.creatorPassword,
        role:1
       };

      const response = await API.post('/auth/register',  payload);

      setMessageType('success');
      setMessage('✅ Registration successful!');
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        creatorPassword: '',
       });

      setTimeout(() => {
        setMessage('');
        onClose(); // close modal
      }, 2000);
    } catch (error) {
      setMessageType('error');
      setMessage(error.response?.data?.message || '❌ Registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Add Users</h2>
          {message && (
          <div
            className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-error'}`}

          >
            {message}
          </div>
        )}
        <form className="modal-form" onSubmit={whiteLableHandler}>

          <input type="text" placeholder="firstName" name='firstName' className="modal-input"  value={formData.firstName}
            onChange={handleChange} required/>

          <input type="text" placeholder="LastName" name='lastName' className="modal-input"  value={formData.lastName}
            onChange={handleChange} />

          <input type="text" placeholder="phoneNumber" name="phoneNumber" className="modal-input"   value={formData.phoneNumber}
            onChange={handleChange} />
          
          <input type="email" placeholder="Email" className="modal-input" name='email'   value={formData.email}
            onChange={handleChange} />

          <input type="text" placeholder="User Name" name='username' className="modal-input"  value={formData.username}
            onChange={handleChange} />

          <input type="text" placeholder="Password" name='password' className="modal-input"  value={formData.password}
            onChange={handleChange}/>

          <input type="text" placeholder="Confirm Password " name='confirmPassword' className="modal-input"  value={formData.confirmPassword}
            onChange={handleChange}/>

          <input type="text" placeholder="Creator Password " name='creatorPassword' className="modal-input"  value={formData.creatorPassword}
            onChange={handleChange}/>

          
          <div className="modal-actions">
            <button type="button" className="modal-button cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit"   disabled={loading}  className="modal-button submit">
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
