import { Link } from 'react-router-dom'
import { Container, Menu} from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';
import { getAuth, signOut} from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Avatar } from '@mantine/core';
// import { BiUserCircle } from 'react-icons/fa';




const Navbar = () => {

  const auth = getAuth();
  
  const checkUser = auth.currentUser;

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
            {checkUser && <li>
             <Menu shadow="md" width={100}>
                <Menu.Target>
                  
                  <Avatar color="cyan" radius="xl">
                    {checkUser.displayName.slice(0,1)}
                  </Avatar>
                </Menu.Target>
               
                <Menu.Dropdown>
                  <Link to="/profile">
                  <Menu.Item>Profile</Menu.Item>
                  </Link>
                  <Menu.Item onClick={onLogout} icon={<IconSettings size={14} />}>Logout</Menu.Item>
                </Menu.Dropdown>
          
              </Menu>  
            </li>}
        </ul>
        </div>
    </Container>
  )
}

export default Navbar