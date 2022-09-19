import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
//virtualDOM got hold over element div. now we can add content to this element by using render function.
function tick(){
 root.render(
   <React.StrictMode>
    <App></App>
    
    <h1>Hello World!!</h1>
    <h2>it is {new Date().toLocaleTimeString()}</h2>
    
    

   </React.StrictMode>
 );
}
setInterval(tick,1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
