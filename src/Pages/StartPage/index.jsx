import { Link } from "react-router-dom"


const StartPage = () => {

    return (
        <>
        <h2>Star PAGE</h2>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        </>
    )
}

export default StartPage