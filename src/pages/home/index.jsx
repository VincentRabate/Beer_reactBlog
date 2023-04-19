import React, {useState, useEffect} from 'react';
import Header from "../../component/common/Header";
import Footer from '../../component/common/Footer';
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
        <Footer/>
        </div>
    );
};

export default Home;