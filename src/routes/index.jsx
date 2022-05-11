import { Route, Switch } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import StartPage from "../Pages/StartPage";



const Routes = () => {

    return (
        
        <Switch>
            <Route exact path='/' ><StartPage/></Route>
            <Route exact path='/login' ><Login/></Route>
            <Route exact path='/register' ><Register/></Route>
            <Route exact path='/dashboard' ><Dashboard/></Route>            
        </Switch>
        
    )
}

export default Routes