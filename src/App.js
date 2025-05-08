import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home.js"
import VideoFile from "./pages/VideoFile.js"
import Test from "./pages/Test.js"
import About from "./pages/About.js"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/test" element={<Test />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/video_BKD3PXMX" element={<VideoFile videoFile="BKD3PXMX" />}/>
          <Route exact path="/video_TWVTVWZU" element={<VideoFile videoFile="TWVTVWZU" />}/>
          <Route exact path="*" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;