import './App.css';
import {Route,BrowserRouter,Switch} from "react-router-dom"
import Home from './Pages/Home';
import Login from './Pages/Login';
import Regisrer from './Pages/Regisrer';


function App() {
  return (
    <BrowserRouter>
    <Route exact path='/' Component={Home}/>
    <Route path='/login' Component={Login}/>
    <Route path='/register' Component={Regisrer} />
    </BrowserRouter>
  );
}

export default App;
