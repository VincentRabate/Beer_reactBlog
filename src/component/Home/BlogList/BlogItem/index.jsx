import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"

const BlogItem = ({ blog: { id, name, image_url, abv, volume } }) => (
  <Link to={`/blog/${id}`} className='BlogItem-link'>
  <div className='BlogItem-div'>
    <img className='blogItem-cover' src={image_url} />
    <h2>{name}</h2>
    <p>{abv} | {volume.value} {volume.unit}</p>
  </div>
</Link>
);

export default BlogItem;