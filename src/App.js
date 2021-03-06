import React from "react";
import "./App.css";
import Navbar from "./components/dashboard/Navbar.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Component } from "react";
import Home from "./components/dashboard/Home";
import Events from "./components/dashboard/Events";
import Login from "./components/dashboard/auth/Login";
import AdminLogin from "./components/dashboard/auth/AdminLogin";
import ResetPassword from "./components/dashboard/auth/ResetPassword";
// import Signup from './components/dashboard/auth/Signup'
import AdminSignup from "./components/dashboard/auth/AdminSignup";
import NewPassword from "./components/dashboard/auth/NewPassword";
import AddUser from "./components/adminpanel/addUser/AddUser";
// import AdminPanel from './components/adminpanel/AddEvent'
import AddEvent from "./components/adminpanel/AddEvent";
import Panel from "./components/admin/adminProfile";
import User from "./components/admin/userProfile";
import Four from "./components/404/FourOFour";
import Footer from "./components/dashboard/Footer";
import EditProfile from "./components/admin/EditProfile";
import DeleteUser from "./components/adminpanel/deleteUser/DeleteUser";
import Allusers from "./components/adminpanel/AllUser/Alluser";
import AddProject from "./components/AddProject/AddProject";
import AdminStatus from "./components/adminpanel/AdminStatus";
import AllProjects from "./components/AddProject/AllProjects";
import Eventreg from "./components/dashboard/eventreg";
import DeleteEvent from "./components/adminpanel/DeleteEvent/DeleteEvent";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter className="maindiv">
          <div className="App maindiv">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/user/profile" component={User}></Route>
              <Route exact path="/admin/panel" component={Panel}></Route>
      
              <Route exact path="/events" component={Events}></Route>
              <Route path={["/event/:id"]} component={Eventreg} />
              <Route exact path="/eventreg" component={Eventreg}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route
                exact
                path="/user/editprofile"
                component={EditProfile}
              ></Route>
              <Route exact path="/admin/login" component={AdminLogin}></Route>
              <Route
                exact
                path="/changePassword"
                component={ResetPassword}
              ></Route>
              {/* <Route exact path="/register" component={Signup}></Route> */}
              <Route exact path="/admin/signup" component={AdminSignup}></Route>
              <Route exact path="/reset/:token" component={NewPassword}></Route>
              <Route exact path="/users/adduser" component={AddUser}></Route>
              <Route exact path="/users/alluser" component={AddUser}></Route>
              <Route exact path="/addevent" component={AddEvent}></Route>
              <Route exact path="/deleteuser" component={DeleteUser}></Route>
              <Route exact path="/gods" component={AdminStatus}></Route>
              <Route exact path="/deleteevent" component={DeleteEvent}></Route>
            
              <Route
                exact
                path="/user/addproject"
                component={AddProject}
              ></Route>
              <Route exact path="/alluser" component={Allusers}></Route>
              <Route
                exact
                path="/user/allprojects"
                component={AllProjects}
              ></Route>
              <Route path="*" component={Four}></Route>
            </Switch>
          </div>
          <div className="Footer" id="contact">
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

/*
import React,{ Component,useEffect, createContext, useReducer, useContext } from 'react'
import './App.css';
import Navbar from './components/dashboard/Navbar.js'
import { BrowserRouter, Switch, Route ,useHistory} from 'react-router-dom'

import Home from './components/dashboard/Home'
import Events from './components/dashboard/Events'
import Login from './components/dashboard/auth/Login'
import ResetPassword from './components/dashboard/auth/ResetPassword'
import Signup from './components/dashboard/auth/Signup'
import AdminSignup from './components/dashboard/auth/AdminSignup'
import NewPassword from './components/dashboard/auth/NewPassword'
import AddUser from './components/adminpanel/addUser/AddUser'
import AdminPanel from './components/adminpanel/AddEvent'
import AddEvent from './components/adminpanel/AddEvent';
import Admin from './components/admin/adminProfile';
import User from './components/admin/userProfile';
import { reducer, initialState } from './reducers/userReducer'

export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const { state, dispatch } = useContext(UserContext)
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      dispatch({ type: "USER", payload: user })
      //history.push('/')
    } else {
      history.push('/')
    }
  }, [])

  return (
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/events" component={Events} />

    <Route exact path="/admin-profile" component={Admin} />
       <Route exact path="/login" component={Login} />
    <Route exact path="/changePassword" component={ResetPassword} />
   <Route exact path="/signup" component={Signup} />
   <Route exact path="/admin/signup" component={AdminSignup} />
    <Route exact path="/reset/:token" component={NewPassword} />
    <Route exact path="/adduser" component={AddUser} />
    <Route exact path="/addevent" component={AddEvent} />
    </Switch>
  )
}

function App () {


    const [state, dispatch] = useReducer(reducer, initialState)
    return (
      <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Navbar />
      <Routing/>
      </BrowserRouter>
    </UserContext.Provider>

    );

}

export default App;
*/

/*
import React from 'react'
import './App.css';
import Navbar from './components/dashboard/Navbar.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Component } from 'react';
import Home from './components/dashboard/Home'
import Events from './components/dashboard/Events'
import Login from './components/dashboard/auth/Login'
import ResetPassword from './components/dashboard/auth/ResetPassword'
import Signup from './components/dashboard/auth/Signup'
import NewPassword from './components/dashboard/auth/NewPassword'
import AddUser from './components/adminpanel/addUser/AddUser'
import AdminPanel from './components/adminpanel/AddEvent'
import AddEvent from './components/adminpanel/AddEvent';
import Admin from './components/admin/adminProfile';
import User from './components/admin/userProfile';

class App extends Component {
  render() {
    return (
      <div>


        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/user-profile" component={User}></Route>
              <Route exact path="/admin-profile" component={Admin}></Route>
              <Route exact path="/events" component={Events}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/changePassword" component={ResetPassword}></Route>
              <Route exact path="/signup" component={Signup}></Route>
              <Route exact path="/reset/:token" component={NewPassword}></Route>
              <Route exact path="/adduser" component={AddUser}></Route>
              <Route exact path="/addevent" component={AddEvent}></Route>
              </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
*/
