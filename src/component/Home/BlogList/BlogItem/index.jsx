import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"

const BlogItem = ({ blog: { id, name, image_url, abv, volume } }) => (
  <Link to={`/blog/${id}`} className='BlogItem-link'>
  <div className='BlogItem'>
    <img className='blogItem-img' src={image_url} />
    <h2 className='blogItem-h2'>{name}</h2>
    <p className='blogItem-p'>{abv} | {volume.value} {volume.unit}</p>
  </div>
</Link>
);

export default BlogItem;