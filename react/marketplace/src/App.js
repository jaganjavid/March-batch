
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Explore from './pages/Explore';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Navbar from './components/Navbar';
import Category from './pages/Category';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import PrivateRoute from './components/PrivateRoute';

function App() {


  return (
    <>
     <Router>
      <Navbar/>
       <Routes>
         <Route path='/' element={<Explore/>}/>
         <Route path='/offers' element={<Offers/>}/>
         <Route path='/category/:categoryName' element={<Category/>}/>
         <Route path='/' element={<PrivateRoute/>}>
           <Route path='/profile' element={<Profile/>}/>
         </Route>
         <Route path='/sign-in' element={<SignIn/>}/>
         <Route path='/sign-up' element={<SignUp/>}/>
         <Route path='/forgot-password' element={<ForgotPassword/>}/>
       </Routes>
     </Router>

     <ToastContainer 
     position="top-center"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"/>
    </>
  );
}

export default App;
