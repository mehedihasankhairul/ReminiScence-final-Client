import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebaseConfig';
import './Login.css';
import { SignInContext } from "../../App";







if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}




const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(SignInContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || {
        from: { pathname: "/dashboard/profile" },
    };



    // handle Email and pass
    const handleEmail = (e) => {
        const addEmail = { ...loggedInUser };
        addEmail.email = e.target.value;
        setLoggedInUser(addEmail);
    };

    // input password value

    const handlePassword = (e) => {
        const addPassword = { ...loggedInUser };
        addPassword.password = e.target.value;
        setLoggedInUser(addPassword);
    };

    function handleSubmit(event) {
        console.log("Login in without data");
        event.preventDefault();
        
    }


    // handle login with Firebase

    const handleLogin = (e) => {
        const loading = toast.loading("logging in...Please wait!");
        if (loggedInUser.email && loggedInUser.password) {
            firebase
                .auth()
                .signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
                .then((userCredential) => {
                    toast.dismiss(loading);
                    toast.success("Successfully Logged In!");
                    const userLoggedIn = { ...loggedInUser };
                    userLoggedIn.isSignedIn = true;
                    setLoggedInUser(userLoggedIn);
                    history.replace(from);
                })
                .catch((error) => {
                    toast.dismiss(loading);
                    toast.error(error.message);
                });
            e.preventDefault();
        }
    };

 

    return (


        <>
            <section className="flex max-h-full login-page">
                <main className="flex-auto  space-y-7 p-2">
                    <header className="py-5 px-5 my-4">
                    </header>
                    <div className="flex items-center justify-center p-5">
                        <h4 style={{ fontFamily: '"montserrat regular"' }} className="text-3xl font-black text-white">
                            Log in
                        </h4>
                    </div>
                    <section className="flex flex-col items-center justify-center">
                        <form action="#" className="space-y-4">
                            <div className="email">
                                <div
                                    className="relative mt-1">
                                    <input
                                        onBlur={handleEmail}
                                        type="email"
                                        id="emailInp"
                                        require
                                        className="p-4 w-80 h-10 rounded pl-10 text-sm focus:outline-none border border-gray-200 focus:border-red-400 font-light"
                                        placeholder="email address"
                                    />
                                    <svg
                                        className="w-4 h-4 absolute top-0 m-3 text-gray-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"><path
                                            fillRule="evenodd"
                                            d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="password">
                                <div className="relative mt-1 mb-2">
                                    <input
                                        onBlur={handlePassword}
                                        type="password"
                                        id="passwordInp"
                                        required
                                        className="p-4 w-80 h-10 rounded pl-10 text-sm focus:outline-none border border-gray-200 focus:border-red-400 font-light"
                                        placeholder="password" />
                                    <svg
                                        className="w-4 h-4 absolute top-0 m-3 text-gray-300"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fillRule="evenodd"
                                            d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <button
                                onClick={handleLogin}
                                className="focus:outline-none bg-red-400 focus:bg-red-500 focus:ring focus:ring-red-200 w-80 mx-auto lg:mx-0 hover:bg-green-600 hover:text-green hover:underline bg-white text-black font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out "
                            >
                                Log in
                            </button>
                        </form>
                    </section>
                    <section className="flex flex-col items-center justify-center space-y-4">
                        <h2
                            className="text-gray-400"
                        >
                            <span>
                                or login with
                            </span>
                        </h2>
                        <div>
                            <ul className="flex items-center justify-around space-x-5">
                                <a href="/">
                                    <li className="border border-white-400 w-10 h-10 rounded flex items-center justify-center text-white-400 hover:bg-yellow-400 hover:text-green-600 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                        <i className="fab fa-google" />
                                    </li>
                                </a>
                                <a href="/">
                                    <li className="border border-white-400 w-10 h-10 rounded flex items-center justify-center text-white hover:bg-blue-400 hover:text-white focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                        <i className="fab fa-facebook-f" />
                                    </li>
                                </a>
                                <a href="/">
                                    <li className="border border-white-400 w-10 h-10 rounded flex items-center justify-center text-red-400 hover:bg-blue-400 hover:text-white focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                        <i className="fab fa-linkedin" />
                                    </li>
                                </a>
                            </ul>
                        </div>
                        <div className="sign_up_link space-x-1">
                            <Link
                                to="/signup"
                            >
                                <span
                                    className="text-sm font-bold text-white"
                                >
                                    Don't have an account?
                                </span>
                                <a
                                    className="text-green-600 hover:text-red-600 text-sm font-light hover:underline inline-block text-black  font-bold no-underline hover:text-gray-800 hover:text-underline py-2 px-4 hover:text-green-600 hover:underline focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" href="/">
                                    Sign up
                                </a>
                            </Link>
                        </div>
                    </section>
                </main>
            </section>
        </>
    );
};

export default Login;