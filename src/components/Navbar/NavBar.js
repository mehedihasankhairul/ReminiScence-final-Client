import firebase from "firebase/app";
import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import toast from "react-hot-toast";

import { Link } from "react-router-dom";
import { SignInContext } from "../../App";

const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(SignInContext);
    const handelSignOut = () => {
        const loading = toast.loading("logging out...Please wait!");
        firebase
            .auth()
            .signOut()
            .then((res) => {
                toast.dismiss(loading);
                toast.error("Logged Out!");
                const signOutUser = {
                    loggedInUser: false,
                    name: "",
                };
                setLoggedInUser(signOutUser);
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };
    return (
        <Navbar className="w-full bg-gray-300 fixed-top" expand="lg">
            <Container>
                <div className="pl-4 flex items-center">
                    <Link to="/"> <a className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl " href="/">
                        {/*Icon from: http://www.potlabicons.com/ */}

                        <img
                            className="h-8 fill-current inline focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-500 ease-in-out"
                            src="https://i.ibb.co/DD7MPLG/part-logo.png" alt="" />
                        <span className=" hover:underline " style={{ color: "#24263b" }}>Remini<span className="hover:text-green-600">S</span>cence</span>
                    </a></Link>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">

                        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:bg-transparent text-black  lg:p-0 z-20" id="nav-content">

                            <ul className="list-reset lg:flex justify-end flex-1 items-center">
                                <li className=" mr-4 inline-block  rounded-full hover:bg-green-700 hover:text-white hover:underline font-bold py-2 px-3 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    <Link to="/">Home</Link>
                                </li>

                                <li className=" mr-4  inline-block  rounded-full hover:bg-green-700 hover:text-white hover:underline font-bold py-2 px-3  shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    <Link to="/blogs">Blogs</Link></li>

                               

                                {/*<li className="md:ml-6  hover:bg-dark-600">
                                <Link to="/cart">
                                    <div style={cartStyle} className=" mr-15 ">
                                        <img className="sm:ml-auto sm:w-1/4 md:w-2/5 lg:w-full rounded-full" src={User} alt="item-cart" />
                                    </div>
                                </Link>

        </li>*/}
                            </ul>
                        </div>
                    </Nav>
                    {loggedInUser.email && loggedInUser.password ? (

                        <Link to="login"> <button onClick={handelSignOut} id="navAction" className="mx-auto rounded-full hover:bg-green-700 hover:text-white hover:underline font-bold py-3 px-4 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            Login
                        </button>
                        </Link>
                    ) : (
                        <button id="navAction" className="mx-auto rounded-full hover:bg-green-700 hover:text-white hover:underline font-bold py-3 px-4 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                            Log Out
                        </button>

                    )}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;