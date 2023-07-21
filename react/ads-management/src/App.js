import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Home from "./pages/Home";

import AuthProvider from "./context/auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/auth/register" element={<Register/>}/>
            <Route path="/auth/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
     </AuthProvider>
  )
}

export default App;
