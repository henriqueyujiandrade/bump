import { Route, Switch } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import StartPage from "../Pages/StartPage";



const Routes = () => {

    return (
        
        <Switch>
            <Route exact path='/' ><StartPage/></Route>
            <Route exact path='/login' ><Login/></Route>
            <Route exact path='/register' ><Register/></Route>            
        </Switch>
        
    )
}

export default Routes