
import { useContext } from "react";
import { doc, updateDoc} from "firebase/firestore";
import { auth, db } from "../FirebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import { async } from "@firebase/util";
import { signOut } from "firebase/auth";



const Navbar = () => {

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async() => {
      //  Upadte the user
      await updateDoc(doc(db, "users", user.uid), {
        online: false
      })

      await signOut(auth);

      navigate("/auth/login");
  }

  return (
    <div className="navbar bg-primary text-primary-content">
       <div className='container mx-auto'>
        <div className="flex-1">
            <div className="normal-case text-xl">
            <Link to={"/"}> Ads Manage</Link>
           </div>
            </div>
            <div className="flex-none">
            { user ? <button className="btn btn-outline btn-white" onClick={ handleLogout }>Logout</button>
            : <ul className="menu menu-horizontal px-1">
            <li><Link to={"/auth/register"}>Register</Link></li>
            <li><Link to={"/auth/login"}>Login</Link></li>
            </ul>}
            </div>
        </div>  
    </div>
  )
}



export default Navbar