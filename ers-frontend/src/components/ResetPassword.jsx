import React, { useState, useRef, useEffect } from 'react';

const ResetPassword = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState(new Array(6).fill(''));
  const inputRefs = useRef([]);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword !== reenterPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Add your password reset logic here
    console.log({
      username,
      newPassword,
      verificationCode: verificationCode.join(''),
    });
  };

  const handleVerificationCodeChange = (e, index) => {
    const { value } = e.target;
    if (/^[0-9]?$/.test(value)) { // Allow only single digit or empty value
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);

      // Move focus to the next input
      if (value !== '' && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && verificationCode[index] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#bdbdbd] bg-opacity-70 z-50">
      <div ref={modalRef} className="bg-gray-100 rounded-lg shadow-lg w-96 text-black relative">
        <div className="items-center justify-center">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 rounded-full items-center"
            aria-label="Close"
          >
            <lord-icon
              src="https://cdn.lordicon.com/zxvuvcnc.json"
              trigger="hover"
            >
            </lord-icon>
          </button>
          <h2 className="text-2xl font-semibold text-start mb-2 m-4">Reset Password</h2>
        </div>
        <hr />
        <form onSubmit={handleResetPassword}>
          <div className="p-6">
            <div className="mb-4">
              <label htmlFor="Phone" className="block text-[13px] font-semibold font-custom text-gray-700">Phone Number</label>
              <input
                maxLength={10}
                type="tel"
                id="Phone"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="new-password" className="block text-[13px] font-semibold font-custom text-gray-700">New Password</label>
              <input
                type="password"
                id="new-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="reenter-password" className="block text-[13px] font-semibold font-custom text-gray-700">Re-enter Password</label>
              <input
                type="password"
                id="reenter-password"
                value={reenterPassword}
                onChange={(e) => setReenterPassword(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="w-1/2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 mb-6"
            >
              Verify Account
            </button>
            <div className="mb-4">
              <label htmlFor="verification-code" className="block text-[13px] font-semibold font-custom text-gray-700 mb-2">Verification Code</label>
              <div className="flex justify-between text-black">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <input
                    key={idx}
                    type="text"
                    maxLength="1"
                    value={verificationCode[idx] || ''}
                    onChange={(e) => handleVerificationCodeChange(e, idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    ref={(el) => (inputRefs.current[idx] = el)}
                    className="w-10 h-10 text-center p-2 border border-gray-300 rounded-md"
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
