import { useContext } from "react"
import { Link } from "react-router-dom"
import { GroupContext } from "../../Providers/Group"
import { MemberContext } from "../../Providers/Member"


const StartPage = () => {
    const {addMember, removeMember} = useContext(MemberContext)
    const data = {email:'teste1@mail.com'}
    return (
        <>
        <h2>Star PAGE</h2>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <button onClick={()=> addMember(data)}>TesteDeApi</button>
        <button onClick={()=> removeMember(3)}>Removendo</button>
        </>
    )
}

export default StartPage