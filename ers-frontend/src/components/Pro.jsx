import React, { useState, useEffect} from 'react';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import Proaside from './Proaside';

const Pro = () => {
  const [profileData, setProfileData] = useState({
    id: '',
    email: '',
    name: '',
    password: '',
    username: '',
    role: '',
  });
  const [saving, setSaving] = useState(false);



  useEffect(() => {
    const fetchProfileData = async () => {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage

      if (token) {
        try {
          const response = await fetch('https://api.example.com/user/profile', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error('Failed to fetch profile data');
          }

          const data = await response.json();

          setProfileData({
            id: data.id,
            email: data.email,
            name: data.name,
            password: data.password,
            username: data.username,
            role: data.role,
          });
        } catch (error) {
          console.error('Error fetching profile data:', error);
        }
      } else {
        console.error('No token found in localStorage');
      }
    };

    fetchProfileData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
    }, 2000);
  };



  return (
    <>
      <div className="absolute top-0 z-[-2] h-[129vh] w-[98.75vw] bg-gray-100"></div>
      <Navbar />
      <div className="flex h-screen text-black container mx-auto rounded-xl mb-16 font-custom">
        {/* Sidebar */}
        <Proaside/>

        {/* Main Content */}
        <main className="w-3/4 p-8 bg-slate-50 border border-gray-200 rounded-e-3xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Personal Information</h2>
            {saving && (
              <div className="text-green-500">
                <span>Saving changes</span>
              </div>
            )}
          </div>
          <hr />

          {/* Profile Picture */}
          <div className="flex items-center mb-8 mt-4">
            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-gray-200">
              <img
                src="data:image/jpeg;base64,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"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-center py-0">
                <span className="text-white">🔒</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <form>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">ID</label>
                <input
                  type="text"
                  name="id"
                  className="w-full p-3 border text-sm font-semibold border-gray-300 rounded-full"
                  value={profileData.id}
                  onChange={handleInputChange}
                // disabled
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 border text-sm font-semibold border-gray-300 rounded-full"
                  value={profileData.name}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">Username</label>
                <input
                  type="text"
                  name="username"
                  className="w-full p-3 border text-sm font-semibold border-gray-300 rounded-full"
                  value={profileData.username}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 border text-sm font-semibold border-gray-300 rounded-full"
                  value={profileData.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
             
             
              <div>
                <label className="block text-sm font-medium mb-2">Role</label>
                <input
                  type="text"
                  name="role"
                  className="w-full p-3 border text-sm font-semibold border-gray-300 rounded-full"
                  value={profileData.role}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </form>
        </main>
      </div >
    </>
  );
};

export default Pro;
