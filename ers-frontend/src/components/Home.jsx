import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Table from './Table';
import './Home.css'
const Home = () => {
  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     fetch('https://0de4-157-39-34-236.ngrok-free.app/api/v1/admin/all-reimbursement', {
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
  //   return <> <Navbar/> <div class="loader"></div>  </> // Placeholder for when data is being fetched
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
