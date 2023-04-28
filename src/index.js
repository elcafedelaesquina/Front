import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppMobile from "./AppMobile"
import{BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
let userAgent = navigator.userAgent;
root.render(
  <BrowserRouter>

  {/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent) ?
      <AppMobile />
      :
      <App />
    }
  </BrowserRouter>
  
);