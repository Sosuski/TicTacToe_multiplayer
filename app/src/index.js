import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Register from './register'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/">
      <Route index element={<App />} />
      <Route path="register" element={<Register />} />
    </Route>
  </Routes>
</BrowserRouter>
);

