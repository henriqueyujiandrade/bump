import { Link } from "react-router-dom"
import ButtonSubmit from "../../components/Button"
import logo from "./../../assets/Logo.svg"
import { HeaderStyled } from "./style"


const StartPage = () => {

    return (
        <>

            <HeaderStyled>

                <div><img src={logo} alt="logo" /></div>

                <div className="links">
                    <Link to='/login'>Login</Link>
                    <Link to='/register'>Register</Link>
                </div>

            </HeaderStyled>

            <main>

                <ButtonSubmit size="1.5rem">Entrar</ButtonSubmit>
                <ButtonSubmit size="1.5rem">Adicionar +</ButtonSubmit>

            </main>
        
        </>
    )
}

export default StartPage