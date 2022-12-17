import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './component/navbar/Navbar';
import HomePage from './page/posts/HomePage';
import ArticlePage from './page/posts/ArticlePage';
import UserPage from './page/users/UserPage';
import DetailPage from './page/users/DetailPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes suppressNoMatchWarning={true}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='article/:id' element={<ArticlePage/>}/>
        <Route path='users/' element={<UserPage/>} />
        <Route path='detail/:id' element={<DetailPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
