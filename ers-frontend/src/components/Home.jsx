import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import './Home.css';

const Home = () => {
  // State to store user data
  // const [userData, setUserData] = useState(null);

  // useEffect to fetch user data on component mount
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

  // Conditional rendering: Show loader if userData is not yet fetched
  // if (!userData) {
  //   return <> <Navbar/> <div className="loader"></div>  </> // Placeholder for when data is being fetched
  // }

  // Always ensure the functional component returns JSX
  // This part renders the main content of the Home component
  return (
    <>
      {/* Render Navbar component */}
      <Navbar />
      {/* Render cards with different statuses */}
      <div className="md:flex md:flex-wrap">
        <Card className='cursor-pointer hover:bg-[#8064A2] hover:text-white' heading="Pending Task" />
        <Card className='cursor-pointer hover:bg-[#77933C] hover:text-white' heading="Approval Task" />
        <Card className='cursor-pointer hover:bg-[#C0504D] hover:text-white' heading="Decline Task" />
        <Card 
          className='cursor-pointer hover:bg-[#0096C8] hover:text-white' 
          heading='Read More'
          subHeading='Click View More'
          iconSrc="https://cdn.lordicon.com/vduvxizq.json"
          isReadMore
        />
      </div>
    </>
  );
}

export default Home;
