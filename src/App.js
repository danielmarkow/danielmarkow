import * as React from 'react';
import {Outlet, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>hello world</h1>
      <nav style={{ borderBottom: 'solid 1px' }}>
        <Link to="/">Home</Link> | {' '}
        <Link to="/aboutme">About me</Link> | {' '}
        <Link to="/projects">Projects</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
