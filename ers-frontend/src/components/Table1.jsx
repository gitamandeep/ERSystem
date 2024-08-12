import axios from 'axios'  // Importing axios for making HTTP requests
import React from 'react'  // Importing React to use JSX syntax
import DataTable from 'react-data-table-component'  // Importing DataTable component for rendering tables
import { useState, useEffect } from 'react'  // Importing hooks for state and side-effects
import { NavLink } from 'react-router-dom'  // Importing NavLink for navigation
import './Table1.css'  // Importing CSS file for custom styling

const Table1 = () => {
<<<<<<< HEAD
    const [data, setData] = useState([])

     useEffect(() => {
        const fetchData = async () => {
          const token = localStorage.getItem('token');
          if (token) {
            try {
              const response = await axios.get('http://localhost:8080/api/v1/admin/all-reimbursement', {
                headers: {
                    'Authorization': `Bearer ${token}`,
                  },
              });
              setData(response.data); // Store user data in state
              console.log(JSON.stringify(response.data));
            } catch (error) {
              console.error('Error fetching user data:', error);
              // Handle error (e.g., show error message to user)
            }
          }
        };

        fetchData();
      }, []);
=======
    // State variable to hold the search input value
    const [search, setSearch] = useState('');
    
    // Commented out state variable and useEffect for fetching data
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const token = localStorage.getItem('token');
    //         if (token) {
    //             try {
    //                 const response = await axios.get('https://e10d-2401-4900-1c71-bb35-95-d6f8-ab4d-1409.ngrok-free.app/api/v1/admin/all-reimbursement', {
    //                     headers: {
    //                         'Authorization': `Bearer ${token}`,
    //                     },
    //                 });
    //                 setData(response.data); // Store user data in state
    //                 console.log(JSON.stringify(response.data));
    //             } catch (error) {
    //                 console.error('Error fetching user data:', error);
    //                 // Handle error (e.g., show error message to user)
    //             }
    //         }
    //     };

    //     fetchData();
    // }, []); 
    

    // Columns definition for the DataTable
>>>>>>> 16e2a32548d4f7d5e160f2fc12c059f200aefc18
    const columns = [
        {
            name: 'Item Name',  // Column header
            selector: row => row.expense.itemName,  // Function to select data for this column
            sortable: true,  // Allows sorting by this column
            cell: row => (
                <NavLink
                    to={`/data/${row.id}`}  // Link to navigate to detailed view
                    className="dataTable-link"
                >
                    {row.expense.itemName}
                </NavLink>
            ),
        },
        {
            name: 'Amount',  // Column header
            selector: row => row.expense.amount,  // Function to select data for this column
            sortable: true,  // Allows sorting by this column
        },
        {
            name: 'Employee Name',  // Column header
            selector: row => row.employee.name,  // Function to select data for this column
            sortable: true,  // Allows sorting by this column
        },
        {
            name: 'Date',  // Column header
            selector: row => row.date,  // Function to select data for this column
            sortable: true,  // Allows sorting by this column
        },
        {
            name: 'Status',  // Column header
            selector: row => row.status,  // Function to select data for this column
            sortable: true,  // Allows sorting by this column
            cell: row => {
                // Determine the text color based on the status
                let textColor = '';
                switch (row.status) {
                    case 'PENDING':
                        textColor = 'text-yellow-600'; // Yellow text for pending
                        break;
                    case 'DECLINED':
                        textColor = 'text-red-600'; // Red text for declined
                        break;
                    case 'APPROVED':
                        textColor = 'text-green-600'; // Green text for approved
                        break;
                    default:
                        textColor = 'text-gray-600'; // Default text color
                }
    
                return (
                    <div className={`text-center ${textColor}`}>
                        {row.status}
                    </div>
                );
            },
        },
    ];

<<<<<<< HEAD
    // const data = [
    //     {
    //         "id": "1c504e91-fbba-4e5d-9ead-0d1d0ed4be8a",
    //         "expense": {
    //             "id": "9faa4b23-47f3-437e-877f-999908f50792",
    //             "itemName": "Office Supplies",
    //             "amount": 150.75,
    //             "merchantName": "Stationery Store",
    //             "description": "Pens, papers, and notebooks",
    //             "pdfUrl": "http://example.com/receipt.pdf",
    //             "expenseDate": "2024-07-01",
    //             "category": "Office"
    //         },
    //         "employee": {
    //             "username": "9934506100",
    //             "name": "Ayush",
    //             "email": "ayush@gmail.com",
    //             "password": "$2a$10$FNtW8j4BLmLODwOhjvVKwO.ZP2iXWOX35ku/d7Cbv0apG0jHMcAEa",
    //             "roles": [
    //                 {
    //                     "id": "ab16d8de-cbd7-43dd-95df-6e4ae3e78c7c",
    //                     "authority": "USER"
    //                 }
    //             ],
    //             "enabled": true,
    //             "id": "34d1e4dc-bfe7-4623-ac3d-08a0eab1cca1",
    //             "authorities": [
    //                 {
    //                     "id": "ab16d8de-cbd7-43dd-95df-6e4ae3e78c7c",
    //                     "authority": "USER"
    //                 }
    //             ],
    //             "accountNonLocked": true,
    //             "accountNonExpired": true,
    //             "credentialsNonExpired": true
    //         },
    //         "status": "PENDING",
    //         "date": "2024-07-09"
    //     },
    //     {
    //         "id": "65b387ae-be49-4b34-a719-166a25b54a11",
    //         "expense": {
    //             "id": "ab5a2504-fa00-48c6-ab34-7453157b6eb6",
    //             "itemName": "Stationary item",
    //             "amount": 150.75,
    //             "merchantName": "Stationery Store",
    //             "description": "Pens, papers, and notebooks",
    //             "pdfUrl": "http://example.com/receipt.pdf",
    //             "expenseDate": "2024-07-01",
    //             "category": "Office"
    //         },
    //         "employee": {
    //             "username": "9934506100",
    //             "name": "Ayush",
    //             "email": "ayush@gmail.com",
    //             "password": "$2a$10$FNtW8j4BLmLODwOhjvVKwO.ZP2iXWOX35ku/d7Cbv0apG0jHMcAEa",
    //             "roles": [
    //                 {
    //                     "id": "ab16d8de-cbd7-43dd-95df-6e4ae3e78c7c",
    //                     "authority": "USER"
    //                 }
    //             ],
    //             "enabled": true,
    //             "id": "34d1e4dc-bfe7-4623-ac3d-08a0eab1cca1",
    //             "authorities": [
    //                 {
    //                     "id": "ab16d8de-cbd7-43dd-95df-6e4ae3e78c7c",
    //                     "authority": "USER"
    //                 }
    //             ],
    //             "accountNonLocked": true,
    //             "accountNonExpired": true,
    //             "credentialsNonExpired": true
    //         },
    //         "status": "PENDING",
    //         "date": "2024-07-09"
    //     }
    // ];
=======
    // Mock data for the DataTable
    const data = [
        {
            "id": "1c504e91-fbba-4e5d-9ead-0d1d0ed4be8a",
            "expense": {
                "id": "9faa4b23-47f3-437e-877f-999908f50792",
                "itemName": "Office Supplies",
                "amount": 150.75,
                "merchantName": "Stationery Store",
                "description": "Pens, papers, and notebooks",
                "pdfUrl": "http://example.com/receipt.pdf",
                "expenseDate": "2024-07-01",
                "category": "Office"
            },
            "employee": {
                "username": "9934506100",
                "name": "Ayush",
                "email": "ayush@gmail.com",
                "password": "$2a$10$FNtW8j4BLmLODwOhjvVKwO.ZP2iXWOX35ku/d7Cbv0apG0jHMcAEa",
                "roles": [
                    {
                        "id": "ab16d8de-cbd7-43dd-95df-6e4ae3e78c7c",
                        "authority": "USER"
                    }
                ],
                "enabled": true,
                "id": "34d1e4dc-bfe7-4623-ac3d-08a0eab1cca1",
                "authorities": [
                    {
                        "id": "ab16d8de-cbd7-43dd-95df-6e4ae3e78c7c",
                        "authority": "USER"
                    }
                ],
                "accountNonLocked": true,
                "accountNonExpired": true,
                "credentialsNonExpired": true
            },
            "status": "PENDING",
            "date": "2024-07-09"
        },
        {
            "id": "65b387ae-be49-4b34-a719-166a25b54a11",
            "expense": {
                "id": "ab5a2504-fa00-48c6-ab34-7453157b6eb6",
                "itemName": "Stationary item",
                "amount": 150.75,
                "merchantName": "Stationery Store",
                "description": "Pens, papers, and notebooks",
                "pdfUrl": "http://example.com/receipt.pdf",
                "expenseDate": "2024-07-01",
                "category": "Office"
            },
            "employee": {
                "username": "9934506100",
                "name": "Ayush",
                "email": "ayush@gmail.com",
                "password": "$2a$10$FNtW8j4BLmLODwOhjvVKwO.ZP2iXWOX35ku/d7Cbv0apG0jHMcAEa",
                "roles": [
                    {
                        "id": "ab16d8de-cbd7-43dd-95df-6e4ae3e78c7c",
                        "authority": "USER"
                    }
                ],
                "enabled": true,
                "id": "34d1e4dc-bfe7-4623-ac3d-08a0eab1cca1",
                "authorities": [
                    {
                        "id": "ab16d8de-cbd7-43dd-95df-6e4ae3e78c7c",
                        "authority": "USER"
                    }
                ],
                "accountNonLocked": true,
                "accountNonExpired": true,
                "credentialsNonExpired": true
            },
            "status": "PENDING",
            "date": "2024-07-09"
        }
    ];
>>>>>>> 16e2a32548d4f7d5e160f2fc12c059f200aefc18

    // Filtering data based on the search input
    const filteredData = data.filter(item =>
        item.employee.name.toLowerCase().includes(search.toLowerCase())
    );

    // Custom styles for the DataTable
    const customStyles = {
        header: {
            style: {
                minHeight: '56px',
                backgroundColor: '#f1f3f5',
                color: '#343a40',
                fontSize: '18px',
                fontWeight: 'bold',
            },
        },
        headRow: {
            style: {
                backgroundColor: '#f1f3f5',
                borderBottomWidth: '2px',
                borderBottomColor: '#dee2e6',
                borderBottomStyle: 'solid',
            },
        },
        headCells: {
            style: {
                color: '#343a40',
                fontWeight: 'bold',
                fontSize: '16px',
                paddingLeft: '16px',
                paddingRight: '16px',
            },
        },
        rows: {
            style: {
                minHeight: '48px',
                '&:not(:last-of-type)': {
                    borderBottomWidth: '1px',
                    borderBottomColor: '#dee2e6',
                    borderBottomStyle: 'solid',
                },
            },
        },
        cells: {
            style: {
                paddingLeft: '16px',
                paddingRight: '16px',
                fontSize: '16px',
            },
        },
        pagination: {
            style: {
                borderTopWidth: '1px',
                borderTopColor: '#dee2e6',
                borderTopStyle: 'solid',
                backgroundColor: '#f1f3f5',
            },
        },
    };

    return (
        <div className='dataTable-container'>
            {/* Search input section */}
            <div className="flex justify-end mb-3">
                <div className="flex items-center bg-slate-100 hover:bg-white border border-gray-300 rounded-full md:py-1 w-[180px] md:w-auto pl-3 pr-3">
                    <div className="flex items-center justify-center w-10 h-10 hover:bg-white rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" role="img" className="icon nav-v2-search__icon">
                            <path d="M1.5 7.75C1.5 9.4076 2.15848 10.9973 3.33058 12.1694C4.50269 13.3415 6.0924 14 7.75 14C9.4076 14 10.9973 13.3415 12.1694 12.1694C13.3415 10.9973 14 9.4076 14 7.75C14 6.0924 13.3415 4.50269 12.1694 3.33058C10.9973 2.15848 9.4076 1.5 7.75 1.5C6.0924 1.5 4.50269 2.15848 3.33058 3.33058C2.15848 4.50269 1.5 6.0924 1.5 7.75V7.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M12.814 12.8132L15.5 15.4999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}  // Binding search input value to state
                        onChange={e => setSearch(e.target.value)}  // Updating search state on input change
                        className="w-full pl-3 pr-3 py-2 text-sm text-gray-700 bg-slate-100 hover:bg-white border-0 focus:outline-none"
                    />
                </div>
            </div>
            
            {/* DataTable component rendering the table with custom styles and filtering */}
            <DataTable
                columns={columns}  // Columns definition
                data={filteredData}  // Data to be displayed in the table
                pagination  // Enabling pagination
                highlightOnHover  // Highlighting rows on hover
                pointerOnHover  // Showing pointer cursor on hover
                dense  // Compact table layout
                customStyles={customStyles}  // Custom styles for the table
            />
        </div>
    );
}

export default Table1;  // Exporting Table1 component for use in other parts of the application
