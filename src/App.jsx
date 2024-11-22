import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// importing routes/router from react-router-dom for access to multiple pages 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';

// another way to link css files in react 
// import './App.css'

// must import Home from Home.jsx file to render homepage 
import Home from './Home';

// import different pages via 'react-router-dom'
import Contactme from '../pages/Contactme';
import Resume from '../pages/Resume';
import Projects from '../pages/Projects';
import Colorpicker from '../pages/Colorpicker';
import Amazon from '../pages/Amazon.jsx';



function App() {

  return (
// different routes to access multiple pages in website w/o creating multiple html/css/js files 
// must npm install 'react-router-dom' and then import { BrowserRouter, Routes, Route } for multiple routes 
    <BrowserRouter>
      <Routes>
        {/* format for no route after / -- default homepage */}
        <Route index element={<Home />} />
        {/* user goes to /contact -- Contactme page shows */}

        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contactme />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/colorpickerproject' element={<Colorpicker />} />
        <Route path='/amazonmock' element={<Amazon />} />
      </Routes>
    </BrowserRouter>

  )
}

// always export function name at the end
export default App
