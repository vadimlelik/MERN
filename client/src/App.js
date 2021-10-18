import Navbar from "./components/navbar/navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Registration from "./components/registration/registration";
import './app.css'
import Login from "./components/login/Login";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "./actions/user";


function App() {
    const isAuth = useSelector(state=>state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(auth())
    },[])
  return (
    <div className="App">
<BrowserRouter>
    <Navbar/>
    <div className="wrap">
        {!isAuth &&
        <Switch>
            <Route path="/registration" component={Registration}/>
            <Route path="/login" component={Login}/>
        </Switch>}

    </div>
</BrowserRouter>


    </div>
  );
}

export default App;
