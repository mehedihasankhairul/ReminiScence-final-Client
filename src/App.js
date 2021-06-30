import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Home from './components/Pages/Home/Home';
import Blogs from "./components/Blogs/Blogs";
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Pages/Dashboard/Dashboard'
import BlogDetails from './components/BlogDetails/BlogDetails';


export const SignInContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: true,
    email: "",
    password: "",
    error: "",
  });
  return (

    <div className="App bg-gray-100">
      <SignInContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/blogs'>
              <Blogs />
            </Route>
            <Route path='/blog/:id'>
            <BlogDetails />
            </Route>
            <PrivateRoute path="/dashboard/:panel">
              <Dashboard />
            </PrivateRoute>
            <Route path='/login'>
              <Login />
            </Route>

          </Switch>
        </Router>
      </SignInContext.Provider>
    </div>
  );
}

export default App;
