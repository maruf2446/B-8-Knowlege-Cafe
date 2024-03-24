import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
// import PropTypes from 'prop-types';

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {

    const [blogs,setBlogs] = useState([]);
    useEffect( () =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className='md:w-2/3 mt-2'>
            {/* <h1 className='text-4xl pb-8'>Blogs :{blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog
                key={blog.id}
                blog={blog}
                handleAddToBookmark={handleAddToBookmark}
                handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};
// Blogs.propTypes = {
//     handleAddToBookmark: PropTypes.func
// }

export default Blogs;