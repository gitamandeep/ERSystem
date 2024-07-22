import React, { useState } from 'react';
import Navbar from './Navbar';  // Import the Navbar component
import axios from 'axios';  // Import axios for making HTTP requests
import { useNavigate, useParams } from 'react-router-dom';  // Import hooks for routing

function Newpage() {
  // Extract 'id' and 'status' from URL parameters
  const { id, status } = useParams();
  // State for handling password input and error messages
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  // Hook for programmatic navigation
  const navigate = useNavigate();

  // Function to update password state on input change
  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  // Function to handle Approve or Decline actions
  const handleAction = async (statusType) => {
    // Prevent action if the status is already set to the same value
    if (statusType === status) {
      return; // No action needed
    }
    try {
      // Authenticate user with the provided password
      const response = await axios.post('/api/authenticate', { password });

      // If authentication is successful
      if (response.data.token) {
        // Store JWT token in localStorage
        localStorage.setItem('jwtToken', response.data.token);
        // Update status with the new value (Approve or Decline)
        await axios.post('/api/expenses/update-status', { id, status: statusType });
        // Navigate to the Datapage with the given id
        navigate(`/datapage/${id}`);
      } else {
        // Set error message if authentication fails
        setError('Invalid password. Please try again.');
      }
    } catch (error) {
      // Handle any errors during the authentication process
      console.error('Error during authentication:', error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Navbar />  {/* Render the Navbar component */}
      <div className="max-w-md mx-auto mt-7 p-8 pt-10 md:p-10 lg:p-16 text-center bg-gray-100 rounded-lg shadow-lg border border-gray-300">
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
            {/* Show Approve button if status is not 'DECLINED' */}
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
            {/* Show Decline button if status is not 'APPROVED' */}
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
    </>
  );
}

export default Newpage;
