import React from 'react';
import { useHistory } from 'react-router-dom';

const Blog = ({ blog: { _id, image, name, description } }) => {

    const history = useHistory();
    const handleDetail = () => {
        history.push(`/blog/${_id}`);
    };

    return (

        <div className=" flex flex-warp m-4">
            <div className="p-4 sm-w-1/2 lg:w-">
                <div onClick={handleDetail} className=" h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                    {/**Images*/}
                    <img className="lg:h-72 md:h-48 w-full object-cover object-center "
                        src={image}
                        alt="" />
                    <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                        <h2 className=" text-base font-medium text-indigo-300 mb-1"> June 26. 2021</h2>

                        {/**Blog Title*/}
                        <h1 className="text-2xl font-semibold mb-3">{name}</h1>

                        {/**Description*/}
                        <p className="leading-relaxed whitespace-normal">
                            {description}
                        </p>

                        <div href="/blog/_id" className="flex items-center flex-wrap">
                            <a className="text-indigo-400 inline-flex items-center-md:mb-2 lg:mb-0">Read More
                                <svg className="w-4 h-4 ml-2 mt-1" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
                                    fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                            <span className="text-gray-400 mr-3 online-flex items-center lg:ml-auto md-ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24 ">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3">  </circle>
                                </svg>1.0K
                            </span>
                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                    <path
                                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z">
                                    </path>
                                </svg>6
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;