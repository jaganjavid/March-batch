import { TextInput, Button, Group, Box, PasswordInput, Text, Center, Paper, Stack} from '@mantine/core';
import { useState } from 'react';
// import { useForm } from '@mantine/form';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { db } from '../firebase-config';

const SignUp = () => {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:""
  });

  const {name, email, password} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }

  const onSubmit = async(e) => {
    e.preventDefault();

    try{
      const auth = getAuth();

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      const user = userCredential.user;


      updateProfile(auth.currentUser, {
        displayName: name
      })

      console.log(user);

      navigate("/explore");
    }catch(error){
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(errorCode, errorMessage);
    }
  }


  return (
    <div>
      <Box maw={500} mx="auto" py={50}>
        <Center>
        <Text style={{
          fontSize: "30px"
        }} mb={20} fw={700}>Create your account</Text>
        </Center>
        <Paper style={{
          boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"
        }} p={15}>
          <form onSubmit={onSubmit}>
            <TextInput
              withAsterisk
              label="Name"
              type="text"
              placeholder="Enter your name"
              mb={20}
              id="name"
              onChange={onChange}
            />
            <TextInput
              withAsterisk
              label="Email"
              type="email"
              placeholder="your@email.com"
              mb={20}
              id="email"
              onChange={onChange}
            />
            <PasswordInput
            placeholder="Password"
            label="Password"
            withAsterisk
            id="password"
            onChange={onChange}
            mb={20}
            />

          <Group style={{
            justifyContent:"space-between"
          }} mt="md">
            <Button type="submit">Submit</Button>
            <Link to="/forgot-password">
               Forgot password
            </Link>
          </Group>

          <Stack>
            <Link to="/sign-in">
               Sign in
            </Link>
          </Stack>
        </form>
      </Paper>
     
      
    </Box>
    </div>
  )
}

export default SignUp