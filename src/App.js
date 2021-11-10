import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Pages/Home/HomePage/Home';
import DashBoard from './Components/Pages/DashBoard/DashBoard';
import House from './Components/Pages/Houses/House';
import Login from './Components/Pages/Login/Login';

import Register from './Components/Pages/Login/Register';
import AuthProvider from './Components/Context/AuthProvider';
import AddProduct from './Components/Pages/DashBoard/AddProduct/AddProduct';
import Pay from './Components/Pages/DashBoard/Pay/Pay';



function App() {
  return (
    <div className="App">
       <AuthProvider>
        <Router>
        
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/houses">
              <House></House>
            </Route>
            <Route path="/dashboard">
              <DashBoard></DashBoard>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>


            <Route path="/pay">
              <Pay></Pay>
            </Route>

            <Route path="/addproduct">
              <AddProduct></AddProduct>
            </Route>
          </Switch>
      
      </Router>
       </AuthProvider>
      
    </div>
  );
}


export default App;
