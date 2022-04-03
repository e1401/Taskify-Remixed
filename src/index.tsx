// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';
// import App from './App';


// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLDivElement
// );
// root.render(<App />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
);