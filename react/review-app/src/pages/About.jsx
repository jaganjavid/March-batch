import { Link } from "react-router-dom"

const About = () => {
  return (
    <div>
        <h1>About page</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Atque amet, facere tempora ipsa doloribus maxime ducimus laudantium 
        rerum consequatur quasi nostrum eveniet illum et minus nam nesciunt 
        veritatis suscipit ullam earum? Earum voluptatem nihil modi molestias a 
        labore voluptatibus fuga.</p>
        <Link to="/">Go to Home</Link>
    </div>
  )
}

export default About