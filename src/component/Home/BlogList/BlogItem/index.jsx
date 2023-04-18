import React from 'react';
import { Link } from 'react-router-dom';

const BlogItem = ({ blog: { id, name } }) => (
  <div>
    <h1>{name}</h1>
    <Link to={`/blog/${id}`}>➝</Link>
  </div>
);

export default BlogItem;