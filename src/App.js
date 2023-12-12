import React, { useState } from 'react'; //import React Component
import { NavMain } from './component/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import MapPage from './component/MapPage';
import Blog from './component/Blog';
import Footer from './component/Footer';
import BlogForum from './component/BlogForum';

function App(props) {
  return (
    <Router>
      <div>
        <NavMain />
        <main>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/BlogForum/:buildingName" element={<BlogForum/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
