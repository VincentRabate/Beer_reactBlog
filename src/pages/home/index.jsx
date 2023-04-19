import React, {useState, useEffect} from 'react';
import Header from "../../component/common/Header";
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
        <Header/>
        <BlogList blogs={blogs} />

        </div>
    );
};

export default Home;