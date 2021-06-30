import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Home from './components/Pages/Home/Home';
import BlogDetails from './components/BlogDetails/BlogDetails';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Pages/Dashboard/Dashboard'

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
