import Navbar from "./components/navbar/navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Registration from "./components/registration/registration";
import './app.css'


function App() {
  return (
    <div className="App">
<BrowserRouter>
    <Navbar/>
    <div className="wrap">
        <Switch>
            <Route path="/registration" component={Registration}/>
        </Switch>
    </div>
</BrowserRouter>


    </div>
  );
}

export default App;
