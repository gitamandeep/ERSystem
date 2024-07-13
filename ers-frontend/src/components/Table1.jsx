import axios from 'axios'
import React from 'react'
import DataTable from 'react-data-table-component'
import { useState, useEffect } from 'react'

const Table1 = () => {
//      const [data, setData] = useState([])

//      const getData = async () => {
//        try {
//         const response = await axios.get("")
//         setData(response.data)
//        } catch (error) {
//         console.log(error)
//        }
//      }

//      useEffect(() => {
//        getData();
//      }, [])

    const columns = [
        {
            name: 'Username',
            selector: row => row.name
        },
        {
            name: 'Email',
            selector: row => row.email
        },
        {
            name: 'Age',
            selector: row => row.age
        }
    ];

    const data = [
        {
            id: 1,
            name: "Ayush",
            email: "ayush@gmail.com",
            age: "17"
        },
        {
            "id": 2,
            "name": "Mia",
            "email": "mia@example.com",
            "age": "22"
        },
        {
            "id": 3,
            "name": "Liam",
            "email": "liam@example.com",
            "age": "29"
        },
        {
            "id": 4,
            "name": "Emma",
            "email": "emma@example.com",
            "age": "34"
        },
        {
            "id": 5,
            "name": "Noah",
            "email": "noah@example.com",
            "age": "27"
        },
        {
            "id": 6,
            "name": "Olivia",
            "email": "olivia@example.com",
            "age": "31"
        },
        {
            "id": 7,
            "name": "Ethan",
            "email": "ethan@example.com",
            "age": "24"
        }
    ]

    return (
        <div className=''>
            <DataTable columns={columns} data={data}></DataTable>
        </div>
    )
}

export default Table1
