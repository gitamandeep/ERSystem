import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoutes from './Services/ProtectedRoutes';
import Datapage from './components/Datapage';
import Employee from './components/Employee';
import CreateExpense from './components/CreateExpense';
import Reimbursement from './components/Reimbursement';
import Newpage from './components/Newpage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='/' element= {<Home />} />
           <Route path="/data/:id" element={<Datapage />} /> {/* Route with URL parameter */}
          </Route>
          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='/' element= {<Home />} />
           <Route path="/new-page/:id/:status" element={<Newpage />} /> {/* Route with URL parameter */}
          </Route>
          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='/' element= {<Home />} />
            <Route path='/reimbursement' element= {<Reimbursement  />} /> {/* Route with URL parameter */}
          </Route>
          <Route path='/employee' element={<ProtectedRoutes />}>
          <Route path='/employee' element= {<Employee />} />
          </Route>
          <Route path='/CreateExpense' element={<CreateExpense />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
