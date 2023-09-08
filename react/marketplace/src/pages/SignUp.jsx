import { TextInput, Button, Group, Box, PasswordInput, Text, Center, Paper} from '@mantine/core';
import { useForm } from '@mantine/form';

const SignUp = () => {

  const form = useForm({
    initialValues: {
      name:"",
      email:"",
      password:""
    }
  });


  return (
    <div>

   
      <Box maw={500} mx="auto" py={50}>
        <Center>
        <Text style={{
          fontSize: "30px"
        }} mb={20} fw={700}>Create your account account</Text>
        </Center>
        <Paper style={{
          boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px"
        }} p={15}>
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            <TextInput
              withAsterisk
              label="Name"
              type="text"
              placeholder="Enter your name"
              {...form.getInputProps('name')}
              mb={20}
            />
            <TextInput
              withAsterisk
              label="Email"
              type="email"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
              mb={20}
            />
            <PasswordInput
            placeholder="Password"
            label="Password"
            withAsterisk
            {...form.getInputProps('password')}
            mb={20}
            />

          <Group position="left" mt="md">
            <Button w={"100%"} type="submit">Submit</Button>
          </Group>
        </form>
      </Paper>
     
      
    </Box>
    </div>
  )
}

export default SignUp