import React, { useState, useEffect,useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Newpage({ id, status, onClose }) {  // Destructure props
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const modalRef = useRef(null);

  const handleChange = (event) => {
    setPassword(event.target.value);
  };

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


  useEffect(() => {
    document.body.style.overflowY = " hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    }
  }, [])

  const handleAction = async (statusType) => {
    if (statusType === status) {
      return;
    }
    try {
      const response = await axios.post('/api/authenticate', { password });

      if (response.data.token) {
        localStorage.setItem('jwtToken', response.data.token);
        await axios.post('/api/expenses/update-status', { id, status: statusType });
        navigate(`/datapage/${id}`);
        onClose();  // Close the modal after successful action
      } else {
        setError('Invalid password. Please try again.');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div ref={modalRef}  className="max-w-md mx-auto mt-7 p-8 pt-10 md:p-10 lg:p-16 text-center bg-gray-100 rounded-lg shadow-lg border border-gray-300 relative ml-[30px] mr-[30px] md:ml-0 md:mr-0">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-2 right-2 3 rounded-full"
        aria-label="Close"
      >
        <lord-icon
          src="https://cdn.lordicon.com/zxvuvcnc.json"
          trigger="hover">
        </lord-icon>
      </button>

      <div className="flex justify-center mb-6">
        <lord-icon
          src="https://cdn.lordicon.com/lomfljuq.json"
          trigger="hover"
          style={{ width: '70px', height: '60px' }}
        ></lord-icon>
      </div>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Trouble status in?</h2>
      <p className="text-gray-600 mb-6">
        Enter your Password and we'll send you a link to get back into your account.
      </p>
      <form onSubmit={(event) => event.preventDefault()}>
        <div className="flex flex-wrap mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2 text-center w-full"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChange}
            className="shadow appearance-none border rounded-xl w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
            aria-label="Password"
          />
        </div>
        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}
        <div className="flex justify-center">
          {status !== 'DECLINED' && (
            <button
              type="button"
              onClick={() => handleAction('DECLINED')}
              disabled={!password}
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded text-center mb-4 ${!password ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Approve
            </button>
          )}
          {status !== 'APPROVED' && (
            <button
              type="button"
              onClick={() => handleAction('APPROVED')}
              disabled={!password}
              className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded text-center mb-4 ml-4 ${!password ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Decline
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Newpage;
