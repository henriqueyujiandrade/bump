import { useContext } from "react"
import { Link } from "react-router-dom"
import { GroupContext } from "../../Providers/Group"
import { MemberContext } from "../../Providers/Member"


const StartPage = () => {
    const {addMember} = useContext(MemberContext)
    const data = {name:'joao', id:'4'}
    return (
        <>
        <h2>Star PAGE</h2>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>
        <Link to='/dashboard'>Dashboard</Link>
        <button onClick={()=> addMember(data)}>TesteDeApi</button>
        <button>Removendo</button>
        </>
    )
}

export default StartPage