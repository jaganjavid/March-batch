import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from 'react-toastify';

const Login = () => {

  const [formData, setFormData] = useState({
    email:"jaganjavid@gmail.com",
    password:"12345678",
  })

  const {email, password} = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
       ...prevState,
       [e.target.id]: e.target.value
    }))
  }

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
   e.preventDefault();
   try{
   
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    if(userCredential.user){
      navigate("/");
      toast.success("You are logged in succesfully");
    }

   }catch(error){
     toast.error("Bad user crediantial");
   }
  }

  return (
    <div className='card max-w-xl mx-auto bg-base-500 shadow-xl p-8 mt-5'>
       <h1 className='text-4xl mb-3'>Create an Account</h1>

       <div className='flex justify-center'>
        <form className='w-full' onSubmit={handleSubmit}>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Enter Your Email</span>
            </label>
            <input type="email" placeholder="Email" 
            className="input input-bordered w-full" 
            id="email"
            value={email}
            onChange={handleChange}/>
          </div>
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text">Enter Your Password</span>
            </label>
            <input type="password" placeholder="Password" 
            className="input input-bordered w-full" 
            id="password"
            value={password}
            onChange={handleChange}/>
          </div>

          <div>
            <button className="btn btn-active btn-primary">Submit</button>
          </div>
        </form>
       </div>

       <div className="flex justify-between	items-center mt-5">
        <p>
          Already have an Account ? <Link to="/auth/login" className="text-sky-500">Login</Link>
        </p>

        <p>{<Link to={"/auth/ForgotPassword"} className="text-yellow-100">Forgot Password</Link>}</p>
       </div>

       
    </div>
  )
}

export default Login