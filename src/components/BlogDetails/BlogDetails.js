import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        axios
            .get(`https://fierce-brushlands-33291.herokuapp.com/blog/${id}`)
            .then((res) => {
                setBlog(res.data);
                console.log(res.data)
            })
            .catch((error) => toast.error(error.message));
    }, [id]);

    


    return (
        <>

            <div className="Container h-full mt-20 bg-gray-100">
                {blog._id ? (
                    <div>
                        {" "}
                        <img
                            src={blog.image}
                            alt={blog.name}
                            style={{ width: "auto" }}
                            className="m-auto"
                        />
                        <h1 className="text-center text-large">{blog.name}</h1>
                        <div style={{ width: "60%", margin: 'auto' }}>
                            <p
                                style={{ fontSize: '36px', textAlign: 'Justify' }}

                                className="text-muted mt-4">{blog.description}</p>
                        </div>
                    </div>
                ) : (
                    <div className="m-auto text-center">
                        <img
                            src="https://i1.wp.com/codemyui.com/wp-content/uploads/2016/09/project-deadline-progress-bar-animation.gif?fit=880%2C440&ssl=1"
                            alt="spinner"
                            style={{ width: "30%", margin: 'auto' }}
                            className="m-auto"
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default BlogDetails;