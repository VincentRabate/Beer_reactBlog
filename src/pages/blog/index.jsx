import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

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
      <Link className='blog-goBack' to='/'>
        <span>← </span> Go back
      </Link>
      <h1>{blog.name}</h1>
      <p>{blog.description}</p>
      <p>ABV: {blog.abv}%</p>
      <p>First brewed: {blog.first_brewed}</p>
    </div>
  );
};

export default BlogDetail;