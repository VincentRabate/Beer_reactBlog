import React, {useState, useEffect} from 'react';
import Test from "../../component/test";
import BlogList from '../../component/Home/BlogList';


const Home = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);
    return (
        <div>
        <Test/>
        <BlogList blogs={blogs} />

         <p>test45</p>
        </div>
    );
};

export default Home;