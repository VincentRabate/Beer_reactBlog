import React, {useState} from 'react';
import Test from "../../component/test";
import BlogList from '../../component/Home/BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState()
    return (
        <div>
        <Test/>
        <BlogList blogs={blogs} />

         <p>test45</p>
        </div>
    );
};

export default Home;