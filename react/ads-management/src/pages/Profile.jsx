import { doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { auth, db, storage } from '../FirebaseConfig';
import  girl  from '../asset/girl.jpeg';
import {deleteObject, getDownloadURL, ref, uploadBytes} from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';


const Profile = () => {

  const { id } = useParams();

  const [user, setUser] = useState();

  const [img, setImg] = useState("");

  const getUser = async() => {
    const docSnapShot = await getDoc(doc(db, "users", id));

    if(docSnapShot.exists()){
       setUser(docSnapShot.data());
    }
  }

  const uplodeImage = async () => {
    try{
         // create image file
    const imgRef = ref(storage, `profile/${uuidv4()}-${img.name}`);

    if(user.photoUrl){
      await deleteObject(ref(storage, user.photoPath))
    }

    // upload image
    const result = await uploadBytes(imgRef, img);

    // get download url
    const url =  await getDownloadURL(ref(storage, result.ref.fullPath))

    // update user doc
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      photoUrl: url,
      photoPath: result.ref.fullPath
    })

    setImg("")
    } catch(error){
      console.log(error);
    }

  }

  useEffect(() => {
    getUser()

    if(img){
      uplodeImage()
    }
  }, [img])

  return user ? (
    <div className='container mx-auto'>

      <div className='md:grid md:grid-cols-3 gap-4'>
         <div className='md:col-span-1 h-screen'>
              <div className="avatar block">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                 {user.photoUrl ?  <img src={user.photoUrl} /> 
                 :  <img src={girl} />}
              </div>
            </div>
            <div className="dropdown mt-5">
              <label tabIndex={0} className="btn m-1">Edit</label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-50">
                <li>
                  <label className='p-3'>
                    Upload Photo 
                    <input type="file" id='photo' accept="image/png, image/gif, image/jpeg"
                    onChange={e => setImg(e.target.files[0])} className='hidden'/>  
                  </label> 
                
                </li>
                <li>
                  <label className='p-3'>
                    Remove 
                  </label>
                </li>
              </ul>
            </div>
         </div>
         <div className='md:col-span-2 h-screen'>
              <h1>{user.name}</h1>
              {uuidv4()}
         </div>
      </div>

      <div>
        <input type="file" />
      </div>
      
    </div>
  ) : null;
}

export default Profile