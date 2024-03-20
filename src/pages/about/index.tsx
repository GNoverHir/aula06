import './style.css'
import { Link } from 'react-router-dom'

const About = () => {
    return(
        <div>
            <h1>About</h1>
            <Link to= '/'>Home</Link><br/>
            <Link to= '/about'>About</Link>
        </div>

    )
}

export default About