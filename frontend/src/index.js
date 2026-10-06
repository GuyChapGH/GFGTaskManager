/*import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// importing css stylesheet to use the bootstrap class
// add this line only in this file
import "bootstrap/dist/css/bootstrap.min.css"; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
*/

import React from 'react';
import { createRoot } from 'react-dom/client'; // Must import from '/client'
import App from './App';

// importing css stylesheet to use the bootstrap class
// add this line only in this file
import "bootstrap/dist/css/bootstrap.min.css";

// Find the HTML element where your React app will live
const container = document.getElementById('root');

// Create the React 19 root
const root = createRoot(container);

// Render your component into the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
