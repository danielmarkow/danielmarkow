import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App';
import Aboutme from './routes/aboutme';
import Projects from './routes/projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/danielmarkow" element={<App/>}>
          <Route path="/danielmarkow/aboutme" element={<Aboutme />} />
          <Route path="/danielmarkow/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
