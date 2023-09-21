import { Link } from 'react-router-dom'
import { Container, Menu, Button } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import { getAuth, signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const Navbar = () => {

  const auth = getAuth();

  const navigate = useNavigate();

  const onLogout = async() => {
    try{
      await signOut(auth);
      navigate("/sign-in");
      toast.success("user logout successfully");
    } catch(error){
      console.log(error)
    }
  }

  return (
    <Container size="lg">
        <div className='navbar'>
        <h1>Logo</h1>
        <ul style={{
         display:"flex",
         alignItems:"center"
        }}>
            <li><Link to="/">Explore</Link></li>
            <li><Link to="/offers">Offer</Link></li>
            <li><Link to="/profile">
             <Menu shadow="md" width={100}>
                <Menu.Target>
                  <Button>Profile</Button>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Item onClick={onLogout} icon={<IconSettings size={14} />}>Logout</Menu.Item>
                </Menu.Dropdown>
              </Menu>  
            </Link></li>
        </ul>
        </div>
    </Container>
  )
}

export default Navbar