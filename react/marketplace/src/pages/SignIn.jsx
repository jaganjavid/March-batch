import { TextInput, Button, Group, Box, PasswordInput, Text, Center, Paper, Stack} from '@mantine/core';
import { getAuth,signInWithEmailAndPassword} from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

const SignIn = () => {

  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    email:"",
    password:""
  });

  const { email, password} = formData;

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

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
  
      if(userCredential.user){
        navigate("/");
      }
    }catch(error){
      toast.error("Bad user Credentials");
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

export default SignIn