import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Sample data
const data = [
  {
    "id": "1c504e91-fbba-4e5d-9ead-0d1d0ed4be8a",
    "expense": {
      "id": "9faa4b23-47f3-437e-877f-999908f50792",
      "itemName": "Office Supplies",
      "amount": 150.75,
      "merchantName": "Stationery Store",
      "description": "Pens, papers, and notebooks ",
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

const Datapage = () => {
  const { id } = useParams(); // Get the URL parameter
  const [itemData, setItemData] = useState(data.find(item => item.id === id));

  // useEffect(() => {
  //     const fetchItemData = async () => {
  //         try {
  //             const response = await axios.get(``);
  //             setItemData(response.data);
  //         } catch (error) {
  //             console.error('Error fetching item data:', error);
  //         }
  //     };

  //     fetchItemData();
  // }, [id]);

  // if (!itemData) {
  //     return <div>Loading...</div>;
  // }

  // const { id } = useParams();
  // const itemData = data.find(item => item.id === id);

  if (!itemData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-red-600">Item not found!</h1>
        </div>
      </div>
    );
  }

  const updateStatus = async (newStatus) => {
    // In a real application, you would send this update to the server
    // For now, we're just updating the state
    setItemData(prevData => ({
      ...prevData,
      status: newStatus
    }));
    // Example API call (uncomment when using actual API)
    // await axios.post(`/api/expenses/${itemData.id}/status`, { status: newStatus });
  };

  const statusColor = {
    'PENDING': 'text-yellow-600',
    'APPROVED': 'text-green-600',
    'DECLINED': 'text-red-600'
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
    <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{itemData.expense.itemName}</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-700 w-1/3">Amount:</span>
              <span className="text-lg text-gray-800">${itemData.expense.amount.toFixed(2)}</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-700 w-1/3">Category:</span>
              <span className="text-lg text-gray-800">{itemData.expense.category}</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-700 w-1/3">Description:</span>
              <span className="text-lg text-gray-800 break-words">{itemData.expense.description}</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-700 w-1/3">Status:</span>
              <span className={`text-lg ${statusColor[itemData.status]}`}>{itemData.status}</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-700 w-1/3">Date:</span>
              <span className="text-lg text-gray-800">{new Date(itemData.date).toLocaleDateString()}</span>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Employee Details</h2>
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-700 w-1/3">Name:</span>
              <span className="text-lg text-gray-800">{itemData.employee.name}</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-700 w-1/3">Username:</span>
              <span className="text-lg text-gray-800">{itemData.employee.username}</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-700 w-1/3">Email:</span>
              <span className="text-lg text-gray-800">{itemData.employee.email}</span>
            </div>
            <div className="flex items-center">
              <span className="text-lg font-semibold text-gray-700 w-1/3">Role:</span>
              <span className="text-lg text-gray-800">{itemData.employee.roles.map(role => role.authority).join(', ')}</span>
            </div>
          </div>
        </div>
        <div className="mt-6 p-4 border-t border-gray-200 text-gray-600">
          <p className="text-sm">Merchant: {itemData.expense.merchantName}</p>
          <p className="text-sm">Expense Date: {new Date(itemData.expense.expenseDate).toLocaleDateString()}</p>
        </div>
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => updateStatus('APPROVED')}
            className="bg-green-500 text-white rounded-lg py-2 px-4 text-center font-medium hover:bg-green-600 transition duration-300 ease-in-out"
          >
            Approve
          </button>
          <button
            onClick={() => updateStatus('DECLINED')}
            className="bg-red-500 text-white rounded-lg py-2 px-4 text-center font-medium hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Decline
          </button>
        </div>
        <div className="mt-6">
          <a
            href={itemData.expense.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 text-white rounded-lg py-2 px-4 text-center font-medium hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            View Receipt
          </a>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Datapage;

