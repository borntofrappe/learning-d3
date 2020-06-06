import React from 'react';
import { href } from './data.js';

function App() {
  return (
    <main>
      <h1>
        <a href={href}>Monthly global surface air temperature anomalies</a>
      </h1>
    </main>
  );
}

export default App;
