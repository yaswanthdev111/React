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
import Cond from './conditional/conditionalmain';
import Parent from './conditioncomponent/parent';
import State from './state/state'
import Button from './state/statebutton'
import Form  from './formevents/formevents'
import Todo from './todo/todoforms'
import Portfolio from './formevents/portfolio/portfolio';
import Life from './lifecycle/lifecycle'
import Update from './update/update.js';
import Functional from './functionalcomponents/functionsetstate.js';
import Props from './functionalprops/functionalprops.js'
import Forms from './functionalforms/forms.js';
import Pure from './purecomponent/pure.js'
import Formss from './functionalforms/multipleforms.js'
import Login from './login/login.jsx'
import Useeffect from './useeffect/useeffect.js';
import Whatsapp from './whatsappproject/index.jsx';
import Context from './contextapi/parent.jsx';
import Dynamic from './dynamicrouting/movieslist.jsx'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* <App /> */}
     {/* {<Hello />} */}
    {/* {<Table/> } */}
    {/* {<Home/>} */}
    {/* {<Practise/>} */}
    {/* {<Pract/>} */}
   {/* { <Resume/>} */}
    {/* {<Home1/>} */}
     {/* {<Pro/>  } */}
    {/* <Boot/> */}

  {/* <Accord/>  */}

    {/* <Cond/> */}
    {/* <Parent login="Admin" /> */}
    {/* <State/> */}
    {/* <Button/> */}
    {/* <Form/> */}
    {/* <Todo/> */}
    {/* <Portfolio/> */}
    {/* <Life/> */}
    {/* <Update color="red"/>   */}
    {/* update color red for getderviedstatefromprops once check in update.js file */}
{/* <Functional/> */}
{/* <Props/> */}
{/* <Forms/> */}
{/* <Pure/> */}
<Formss/>
{/* <Login/> */}
{/* <Useeffect/> */}
{/* <Whatsapp/> */}
{/* <Context/> */}
{/* <Dynamic/> */}


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
