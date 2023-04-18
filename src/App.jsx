import React from 'react';
import './App.css';
import Home from "./pages/home";
import Blog from "./pages/blog";
import {Routes, Route} from "react-router-dom";

const App = () => (
    <div className="container ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
);

export default App;
