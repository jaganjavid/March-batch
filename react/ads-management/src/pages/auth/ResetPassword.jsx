// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../../FirebaseConfig";
// import { confirmPasswordReset } from "firebase/auth";
// import { useSearchParams } from "react-router-dom";

// const ResetPassword = () => {

  
    
//   let [searchParams, setSearchParams] = useSearchParams();

//   const [password, setPassword] = useState("");  
//   const [confirmPassword, setConfirmPassword] = useState("");  
//   const [success, setSuccess] = useState(false);

//   // const navigate = useNavigate();

//   const handleSubmit = async(e) => {
//    e.preventDefault();

//    if(!password || !confirmPassword){
//      console.log("Error");
//      return;
//    }

//    if(password !== confirmPassword){
//     console.log("error")
//     return;
//    }

//    try{
//     await confirmPasswordReset(auth, searchParams.get("oobCode"), password);
//     setSuccess(true);
//     setPassword("");
//     setConfirmPassword("");
//     console.log(searchParams);
//    }catch(error){
//      console.log(error.message)
//    }
//   }

//   return (
//     <div className='card max-w-xl mx-auto bg-base-500 shadow-xl p-8 mt-5'>
//        <h1 className='text-4xl mb-3'>Create an Account</h1>

//        <p>{success && "Your password is succesfully reset"}</p>
//        <div className='flex justify-center'>
//         <form className='w-full' onSubmit={handleSubmit}>
//           <div className="form-control w-full mb-4">
//             <label className="label">
//               <span className="label-text">Enter Your Password</span>
//             </label>
//             <input type="password" placeholder="Password" 
//             className="input input-bordered w-full" 
//             id="email"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}/>
//           </div>
//           <div className="form-control w-full mb-4">
//             <label className="label">
//               <span className="label-text">Enter Your Confirm Password</span>
//             </label>
//             <input type="password" placeholder="Confirm Password" 
//             className="input input-bordered w-full" 
//             id="email"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}/>
//           </div>
//           <div>
//             <button className="btn btn-active btn-primary">Send</button>
//           </div>
//         </form>
//        </div>

//        <p className='mt-5'>
//         Already have an Account ? <Link to="/auth/login" className="text-sky-500">Login</Link>
//        </p>
//     </div>
//   )
// }

// export default ResetPassword