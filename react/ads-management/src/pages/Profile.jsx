import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { auth, db, storage } from "../FirebaseConfig";
import { useParams } from 'react-router-dom';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import girl from "../asset/girl.jpeg";
import { v4 as uuidv4 } from "uuid";

const Profile = () => {


    const { id } = useParams();
    
    const [user, setUser] = useState();

    const [img, setImg] = useState("");

    const getUser = async() => {
        const docSnapShot = await getDoc(doc(db, "users", id));

        if(docSnapShot){
            setUser(docSnapShot.data());
        }
    }

    const uplodeImage = async () => {
        try{
            // Create a image file
            const imgRef = ref(storage, `profile/${uuidv4()}-${img.name}`)

            // uplode image

            // get the download url

            // update user doc
            
        }catch(error){
            console.log(error)
        }
    }
   
    useEffect(() => {
       getUser();

       if(img){
        uplodeImage();
       }
    }, [])


   

  return (
    <div className='container mx-auto'>

        <div className='md:grid md:grid-cols-3 gap-3'>
            <div className='md:col-span-1'>
                <div className="avatar block">
                    <div className="w-24 rounded-full">
                        <img src={girl} />
                    </div>
                </div>
                <details className="dropdown mb-32 mt-4">
                    <summary className="m-1 btn">Edit</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li>
                          <label className='p-3'>
                             Upload Image
                             <input type="file" className="hidden" accept='image/png, image/gif, image/jpeg'
                             onChange={(e) => setImg(e.target.files[0])}/>
                          </label>
                        </li>
                        <li>
                            <p className='p-3' onClick={(e) => console.log(e)}>
                                Remove Image
                            </p>
                        </li>
                    </ul>

                </details>
            </div>
            <div className='md:col-span-2'>
                <p>{user.name}</p>
                <p>{uuidv4()}</p>
            </div>
        </div>
    </div>
  )
}

export default Profile