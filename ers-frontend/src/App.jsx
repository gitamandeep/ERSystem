import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoutes from './Services/ProtectedRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<ProtectedRoutes />}>
            <Route path='/' element= {<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
