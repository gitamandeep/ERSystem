import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Table from './Table';
const Home = () => {
  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     fetch('https://489d-223-178-212-47.ngrok-free.app/api/v1/admin/all-reimbursement', {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': `Bearer ${token}`,
  //       },
  //     })
  //       .then(res => {
  //         if (!res.ok) {
  //           throw new Error('Failed to fetch user data');
  //         }
  //         return res.json();
  //       })
  //       .then(data => {
  //         setUserData(data); // Store user data in state
  //         console.log(JSON.stringify(data));
  //       })
  //       .catch(error => {
  //         console.error('Error fetching user data:', error);
  //         // Handle error (e.g., show error message to user)
  //       });
  //   }
  // }, []);

  // if (!userData) {
  //   return <> <Navbar/> <p>Loading...</p> </> // Placeholder for when data is being fetched
  // }

  return (
    <>
     <Navbar/>
     <Card/>
     <Table/>
    </>
  )
}

export default Home
