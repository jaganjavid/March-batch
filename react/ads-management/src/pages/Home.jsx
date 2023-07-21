import { useState, useEffect} from "react"
import { auth } from "../FirebaseConfig"

const Home = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(auth.currentUser);
  }, [])


  return (
    <div className="container mx-auto"> 
      <p>{user ? user.displayName : "Not found"}</p>
    </div>
  )
}

export default Home