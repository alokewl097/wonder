import React from 'react';
 

const Modal = ({ isOpen, onClose }) => {
    
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Server Details</h2>
        <form className="modal-form">
          <input type="text" placeholder="URL" className="modal-input" />
          <input type="text" placeholder="Username" className="modal-input" />
          <input type="password" placeholder="Password" className="modal-input" />
          <input type="email" placeholder="Email" className="modal-input" />
          <input type="tel" placeholder="Mobile" className="modal-input" />
          <label className="modal-checkbox">
            <input type="checkbox" /> Already have a server
          </label>
          <div className="modal-actions">
            <button type="button" className="modal-button cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="modal-button submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
