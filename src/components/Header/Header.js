import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typing from '../../images/typing.jpg';




const Header = () => {
    return (
        <>
            {/* Header Section */}
            <div className="md:max-w-full mx-auto sm:w-full col-md-6">
                <div
                    style={{

                        backgroundImage: `url("https://miro.medium.com/max/3840/1*ee9Ji2ToUxeYfj3YUQ1xsA.jpeg")`,
                    }}
                    className=" backgroundStyle py-16 bg-bottom">
                    <Container>
                        <div className="container mx-auto flex items-center justify-between col-md-6">
                            <div className="md:w-1/2 md:py-16">
                                <h4 className="text-lg mt-5 text-black"><em>Do You Have any Memories ..?</em></h4>
                                <h1 className="text-3xl mt-2 md:text-6xl text-white -yellow-800 hover:underline font-bold mb-5 ">Write Your Memories ...</h1>
                                <Link to="dashboard/addBlog">
                                    <button
                                        className="px-6 sm:px-6 py-2 rounded-full text-white font-bold mt-5 bg-yellow-600 hover:bg-yellow-800 mx-auto lg:mx-0 hover:bg-green-700 hover:text-white hover:underline font-bold  mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                        Write a Post
                                    </button>
                                </Link>
                            </div>
                            <div className="md:w-1/2 sm:w-4/12 m-10 ">
                                <img className="rounded-full" src={Typing} alt="" />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </>
    );
};

export default Header;