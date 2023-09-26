import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { useState } from "react";
import { Text, Container, Input, Stack, Button, Group } from "@mantine/core";


const ForgotPassword = () => {

  const [email, setEmail] = useState();

  const onChange = (e) => {
      setEmail(e.target.value);
  }

  const onSubmit = async(e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent")
    }catch(error){
      toast.error("Could not send reset email");
    }
  }

  return (
    <Container size="lg">
      <header>
        <Text fw={700} size="xl">Forgot Password</Text>
      </header>

      <main>

        <Input placeholder="Email"
          id="email" value={email}
          onChange={onChange} />

        <Group style={{
            alignContent: "center",
            justifyContent: "space-between"
          }}>

            <Stack mt={20}>
              <Button onClick={onSubmit}>
                Send Reset Link
              </Button>
            </Stack>

            <Stack>
              <Link to="/sign-in">Sign In</Link>
            </Stack>
          </Group>


      </main>
    </Container>
  )
}

export default ForgotPassword