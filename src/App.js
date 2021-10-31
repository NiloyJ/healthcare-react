import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Services/Services';
import Teams from './Pages/Home/Teams/Teams';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Registration from './Pages/Login/Registration/Registration';
import Footer from './Pages/Shared/Footer/Footer';
import Pricing from './Pages/Pricing/Pricing';
import AddUser from './Pages/AddUser/AddUser';
import UpdateProduct from './Pages/UpdateProduct/UpdateProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import ManagerOrders from './Pages/ManageOrders/ManagerOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/teams">
              <Teams></Teams>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="/pricing">
              <Pricing></Pricing>
            </Route>
            <Route path="/addservice">
              <AddUser></AddUser>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/myorders">
              <ManagerOrders></ManagerOrders>
            </Route>
            <Route path="/update/:productId">
              <UpdateProduct></UpdateProduct>
            </Route>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
