import Navbar from "./components/navbar/navbar";
import {BrowserRouter} from "react-router-dom";


function App() {
  return (
    <div className="App">
<BrowserRouter>
    <Navbar/>
</BrowserRouter>


    </div>
  );
}

export default App;
