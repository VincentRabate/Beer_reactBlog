import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from "../../component/common/Header";
import Footer from "../../component/common/Footer";
import "./styles.css"


const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data[0]));
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header/>

      <div className='blog-container'>
        <div className="blog-container-img">
          <Link className='blog-goBack' to='/'>
        <span className='Goback'><strong>←</strong> Go back</span> 
      </Link>
      <img className="blog-img" src={blog.image_url}alt="beer" />
        </div>
        <div className="container-text">
      <h1 className='blog-name'>{blog.name}</h1>
        <p className='blog-infos'>{blog.abv}% | {blog.volume.value} {blog.volume.unit}</p>

      <p className='blog-description'>{blog.description}</p>
      <p>Ingredients : </p>
      <p className='ingredients'>
        <ul>
      {blog.ingredients.malt.map((ingredient) => (
        <li>{ingredient.name}</li>
      ))}
    </ul>
    <br />
    <ul className='hops'>
      {blog.ingredients.hops.map((ingredient) => (
        <li>{ingredient.name}</li>
      ))}
    </ul>
      </p>
      <p className='brewers-tips'> <strong>"</strong> {blog.brewers_tips} "</p>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BlogDetail;