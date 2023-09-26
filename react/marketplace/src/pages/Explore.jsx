import { Link } from "react-router-dom";
import rentImage from "../assets/images/house-1.jpg";
import sellImage from "../assets/images/house-2.jpg";
import { Container} from "@mantine/core";


const Explore = () => {
  return (
    <>
      <header>
        <Container size="lg">
           <h1>Explore</h1>
        </Container>
      </header>

      <main>

         {/* Slider */}

        <Container size="lg">
          <h4>Categories</h4>
          <div className="categories">
             <div>
              
              <Link to={"/category/rent"}>
                  <img src={rentImage} alt="rent" />
                  <p>Place for rent</p>
              </Link>
            </div>
            <div>
              <Link to={"/category/sale"}>
                  <img src={sellImage} alt="rent" />
                  <p>Place for sale</p>
              </Link>
            </div>
          </div>
            
        </Container>
      </main>
    </>
  )
}

export default Explore