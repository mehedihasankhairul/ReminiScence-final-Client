import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        axios
            .get(`https://ph-my-blog.herokuapp.com/all-blogs/${id}`)
            .then((res) => {
                setBlog(res.data);
            })
            .catch((error) => toast.error(error.message));
    }, [id]);
    console.log(blog);

    return (
        <>

            <div className="Container h-full mt-20">
                {blog._id ? (
                    <div>
                        {" "}
                        <img
                            src={blog.image}
                            alt={blog.name}
                            style={{ width: "auto" }}
                            className="m-auto"
                        />
                        <h1 className="text-center">{blog.name}</h1>
                        <div style={{ width: "60%", margin: 'auto' }}>
                            <p
                                style={{ fontSize: '36px', textAlign: 'Justify' }}

                                className="text-muted mt-4">{blog.description}</p>
                        </div>
                    </div>
                ) : (
                    <div className="m-auto text-center">
                        <img
                            src="https://cdn.dribbble.com/users/935167/screenshots/2896660/project-loader-colors.gif"
                            alt="spinner"
                            style={{ width: "30%", margin: 'auto'}}
                            className="m-auto"
                        />
                    </div>
                )}
            </div>

        </>
    );
};

export default BlogDetails;