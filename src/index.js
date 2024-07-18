// Entry point
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* yaha pr index.js keh rha h kk App wali component ko render krdo aur render kr k uske andr k content ko document.getElementById("root") pr lekar jao. Ab ye react ka code h aur iske andr kuch logic likha hua h jo ki aap logo ko iss tarah ki kuch functionality deta h ki aap App.js l andar changes karoge aur vo index.js ki help se document.getElementById("root") iss element me aa jayega.  */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
