import './style.css'
import { Link } from 'react-router-dom'


const Contact = () => {
    return(
        <div>
            <h1>Contact</h1>
            <Link to= '/about'>About</Link> <br/>
            <Link to= '/'>Home</Link>
        </div>

    )
}

export default Contact