import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoutes from './Services/ProtectedRoutes';
import Datapage from './components/Datapage';
import Employee from './components/Employee';
import Pro from './components/Pro';
import CreateExpense from './components/CreateExpense';
import Reimbursement from './components/Reimbursement';
import Newpage from './components/Newpage';
import ResetPassword from './components/ResetPassword';
import Changepass from './components/Changepass';
import EmployeeTable from './components/EmployeeTable';
import EmployeeProfile from './components/EmployeeProfile';
import Employeechangepass from './components/Employeechangepass';
import Employeedatapage from './components/Employeedatapage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='/' element={<Home />} />
            <Route path="/data/:id" element={<Datapage />} /> {/* Route with URL parameter */}
          </Route>
          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='/' element={<Home />} />
            <Route path='/reimbursement' element={<Reimbursement />} /> {/* Route with URL parameter */}
          </Route>
          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Pro />} /> {/* Route with URL parameter */}
          </Route>
          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='/' element={<Home />} />
            <Route path='/changepass' element={<Changepass />} /> {/* Route with URL parameter */}
          </Route>
          <Route path='/employee' element={<ProtectedRoutes />}>
            <Route path='/employee' element={<Employee />} />
          </Route>
          <Route path='/CreateExpense' element={<CreateExpense />} />
          <Route path='/employeetable' element={<EmployeeTable />} />
          <Route path='/employeeprofile' element={<EmployeeProfile />} />{/* Route with URL parameter */}
            <Route path='/employeechangepass' element={<Employeechangepass />} />
            <Route path="/employeedatapage/:id" element={<Employeedatapage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
