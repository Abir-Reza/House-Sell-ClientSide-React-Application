import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Components/Pages/Home/HomePage/Home';
import DashBoard from './Components/Pages/DashBoard/DashBoard';
import Login from './Components/Pages/Login/Login';

import Register from './Components/Pages/Login/Register';
import AuthProvider from './Components/Context/AuthProvider';
import AddProduct from './Components/Pages/DashBoard/AddProduct/AddProduct';
import Pay from './Components/Pages/DashBoard/Pay/Pay';
import Houses from './Components/Pages/AllHouses/Houses.js/Houses';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import MakeAdmin from './Components/Pages/DashBoard/MakeAdmin/MakeAdmin';
import Purchase from './Components/Pages/Purchase/Purchase';
import MyOrders from './Components/Pages/DashBoard/MyOrders/MyOrders';
import AddReview from './Components/Pages/Home/Reviews/AddReview';
import ManageProducts from './Components/Pages/DashBoard/ManageProduct/ManageProducts';
import ManageOrders from './Components/Pages/DashBoard/ManageOrders/ManageOrders';



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
            <Route path="/allhouses">
              <Houses></Houses>
            </Route>
            <PrivateRoute path="/dashboard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/houses/:houseId">
              <Purchase></Purchase>
            </PrivateRoute> 

            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/addreviews">
              <AddReview></AddReview>
            </PrivateRoute>


            <PrivateRoute path="/pay">
              <Pay></Pay>
            </PrivateRoute>

            <PrivateRoute path="/addproduct">
              <AddProduct></AddProduct>
            </PrivateRoute>

            <PrivateRoute path="/manage_orders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>

            <PrivateRoute path="/manageproducts">
              <ManageProducts></ManageProducts>
            </PrivateRoute>

            <PrivateRoute path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute> 
          </Switch>
      
      </Router>
       </AuthProvider>
      
    </div>
  );
}


export default App;
