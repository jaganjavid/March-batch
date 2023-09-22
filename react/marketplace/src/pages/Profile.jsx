import { Container, Input} from "@mantine/core"
import { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import {db} from "../firebase-config";
import { Group, Button } from '@mantine/core';


const Profile = () => {

  const auth = getAuth();

  const [changeDetails,setChangeDetails] = useState(false);

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })
  

  const onSubmit = async() => {
    try{
      if(auth.currentUser.displayName !== name){
        // Upadte display name in firebase
        await updateProfile(auth.currentUser, {
          displayName: name
        })

        // Update in firestore
        const useRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(useRef, {
          name
        });
      }
    }catch(err){
      console.log(err)
    }
  }

  const btnChange = () => {
    changeDetails && onSubmit()
    setChangeDetails((prevState) => !prevState)
  }
  
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id] : e.target.value
    }))
  }

  const {name, email} = formData;

  return (
    <Container size="lg">
      <div className="profile">
         {/* <h1>{name}</h1>
         <p>{email}</p> */}

         <main>
            <Group style={{
              justifyContent:"space-between"
            }}>
              <p>Personal Details</p>
              <Button onClick={btnChange}>{changeDetails ? "done" : "change"}</Button>
            </Group>

            <div>
              <form>

               <Input placeholder="Your name" 
               disabled={!changeDetails ? true : false} 
               onChange={onChange}
               id="name" value={name}/>

               <Input mt={5} placeholder="Enter your email" 
               disabled={true} 
               id="email" value={email}/>

              </form>
            </div>
         </main>
      </div>
    </Container>
  )
}

export default Profile