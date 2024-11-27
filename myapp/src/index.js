import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './hello';
import Table from './table';
import Home from './home'
import Practise from './practise'
import Pract  from './pract'
import Resume from './resume'
import Home1 from './resumehome'
import Pro from './propsmain'
import Boot from './bootstrapmain'
import Accord from './accordianmain'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* {<Hello />}
    <Table/> */}
    {/* <Home/> */}
    {/* <Practise/> */}
    {/* <Pract/> */}
    {/* <Resume/> */}
    {/* <Home1/> */}
    {/* <Pro/> */}
    {/* <Boot/> */}
    <Accord/>



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
