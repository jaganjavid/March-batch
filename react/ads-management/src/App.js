
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import AuthProvider from "./context/auth";
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "./components/Navbar";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";
import Profile from "./pages/Profile";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth/register" element={<Register/>}/>
            <Route path="/auth/login" element={<Login/>}/>
            <Route path="/auth/ForgotPassword" element={<ForgotPassword/>}/>
            {/* <Route path="/auth/resetpassword" element={<ResetPassword/>}/> */}
            <Route path="/profile/:id" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
     </AuthProvider>
  )
}

export default App;
