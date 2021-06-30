import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios
            .get("https://ph-my-blog.herokuapp.com/all-blogs")
            .then((res) => {
                setBlogs(res.data);
            })
            .catch((error) => toast.error(error.message));
    }, []);

    return (

        <>
            {/*  <div className=" mt-5 text-center">
                <h1 className="text-3xl md:text-6xl font-bold"> Blogs for You</h1> 
             </div> */}


            <div className="bg-gray-100">
                <section className="flex items-center text-gray-600 pt-5">
                    <div className="container mt-5 px-5-py-24 mx-auto">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-6xl text-black-700 mb-1 font-semibold mt-5 pt-5 hover:text-green-600 hover:underline"> See Our Recent Blogs</h1>
                        </div>
                    </div>
                </section>
            </div>
            <div className="grid md:grid-cols-3">
             {
                blogs.map(blog => <Blog blog={blog}/>)
             }
            

            </div>
        </>
    );
};

export default Blogs;