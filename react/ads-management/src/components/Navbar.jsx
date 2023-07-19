import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content">
       <div className='container mx-auto'>
        <div className="flex-1">
            <div className="normal-case text-xl">
            <Link to={"/"}> Ads Manage</Link>
           </div>
            </div>
            <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><Link to={"/auth/register"}>Register</Link></li>
                <li><Link to={"/auth/login"}>Login</Link></li>
            </ul>
            </div>
        </div>  
    </div>
  )
}

export default Navbar