import { Link } from 'react-router-dom'
import './style.css'


const Home = () => {

    return(
        <div>
            <h1>Home</h1>
            <Link to= '/about'>About</Link>
        </div>

    )
}

export default Home