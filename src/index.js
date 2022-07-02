import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Home';
import Header from './Header';
import Aboutme from './routes/aboutme';
import Projects from './routes/projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/danielmarkow" element={<Home/>} />
            <Route path="/danielmarkow/aboutme" element={<Aboutme />} />
            <Route path="/danielmarkow/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
  </React.StrictMode>
);
