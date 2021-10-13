import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import Pokemon from './Pokemon';
import { BrowserRouter } from 'react-router-dom';
import RouterEx from './RouterEx';
ReactDom.render(
  
  <BrowserRouter>
    <RouterEx />
  </BrowserRouter>
  ,
  document.getElementById('root')
);

