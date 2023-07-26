import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../FirebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {


  const [email, setEmail] = useState("");  
  const [success, setSuccess] = useState(false);


  const handleSubmit = async(e) => {
   e.preventDefault();
   try{
    await sendPasswordResetEmail(auth, email);
    setSuccess(true);
    setEmail("");
   }catch(error){
     console.log(error.message)
   }
  }

  return (
    <div className='card max-w-xl mx-auto bg-base-500 shadow-xl p-8 mt-5'>
       <h1 className='text-4xl mb-3'>Create an Account</h1>

       <p>{success && "Check your email to reset password"}</p>
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
            onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div>
            <button className="btn btn-active btn-primary">Send</button>
          </div>
        </form>
       </div>

       <p className='mt-5'>
        Already have an Account ? <Link to="/auth/login" className="text-sky-500">Login</Link>
       </p>
    </div>
  )
}

export default ForgotPassword