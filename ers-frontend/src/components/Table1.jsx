import axios from 'axios'
import React from 'react'
import DataTable from 'react-data-table-component'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Table1.css'

const Table1 = () => {
    const columns = [
        {
            name: 'Item Name',
            selector: row => row.employee.name,
            selector: row => row.expense.itemName,
            sortable: true,
            cell: row => (
                <NavLink
                    to={`/data/${row.id}`}
                    className="dataTable-link"
                >
                    {row.expense.itemName}
                </NavLink>
            ),
        },
        {
            name: 'Amount',
            selector: row => row.expense.amount,
            sortable: true,
        },
        {
            name: 'Category',
            selector: row => row.expense.category,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
        }
    ];

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
            <DataTable
                columns={columns}
                data={data}
                pagination
                highlightOnHover
                pointerOnHover
                dense
                customStyles={customStyles}
            />
        </div>
    );
}

export default Table1;
