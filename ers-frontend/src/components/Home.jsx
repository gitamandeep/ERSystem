import { useEffect, useState } from 'react';
import Navbar from './Navbar';
const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('https://dummyjson.com/auth/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
        .then(res => {
          if (!res.ok) {
            throw new Error('Failed to fetch user data');
          }
          return res.json();
        })
        .then(data => {
          setUserData(data); // Store user data in state
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
          // Handle error (e.g., show error message to user)
        });
    }
  }, []);

  if (!userData) {
    return <> <Navbar/> <p>Loading...</p> </> // Placeholder for when data is being fetched
  }

  return (
    <>
    <Navbar/>
      <div className="cards flex flex-wrap gap-5 text-black">
        <div className='card h-auto md:w-[400px] w-[600px] my-3 mx-3 bg-violet-100  rounded-xl'>
          <img className='rounded-3xl p-3' width={400} src={userData.image} alt="" />
          <div className='p-2'>
            <h1 className='text-3xl font-bold'>{userData.username} </h1>
            <p className='text-2xl'>{userData.university}</p>
            <p className='py-4'>{userData.userAgent}</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
