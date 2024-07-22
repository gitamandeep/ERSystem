import React, { useState } from 'react';
import EmployeeNavbar from './EmployeeNavbar';


// Define the CreateExpense component
const CreateExpense = () => {
  // State to store expense details
  const [expense, setExpense] = useState({
    name: '',       // Name of the expense
    amount: '',     // Amount of the expense
    date: '',       // Date of the expense
    merchant: '',   // Merchant or vendor for the expense
    category: '',   // Category of the expense
    description: '' // Description of the expense
  });

  // Handle changes to input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevExpense) => ({
      ...prevExpense,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Handle form submission (e.g., send expense data to a server or update state)
    console.log('Expense submitted:', expense);
  };

  // Get today's date in YYYY-MM-DD format for date input field max value
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
    <EmployeeNavbar />
    <main className="flex-grow bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Create Expense</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={expense.name}
              onChange={handleChange}
              required
              placeholder="Enter Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Amount field */}
          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-700 text-sm font-bold mb-2">Amount:</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={expense.amount}
              onChange={handleChange}
              required
              placeholder="Enter amount"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Date field */}
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Expense Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={expense.date}
              onChange={handleChange}
              required
              max={today} // Prevent selection of future dates
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Merchant field */}
          <div className="mb-4">
            <label htmlFor="merchant" className="block text-gray-700 text-sm font-bold mb-2">Merchant:</label>
            <input
              type="text"
              id="merchant"
              name="merchant"
              value={expense.merchant}
              onChange={handleChange}
              required
              placeholder="Enter merchant name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Category field */}
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              value={expense.category}
              onChange={handleChange}
              required
              placeholder="Enter category"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Description field */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
            <textarea
              id="description"
              name="description"
              value={expense.description}
              onChange={handleChange}
              required
              placeholder="Enter description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          {/* Submit button */}
          <div className="flex items-center justify-between mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Expense
            </button>
          </div>
        </form>
      </div>
    </main>
  </div>
  );
};

export default CreateExpense;
