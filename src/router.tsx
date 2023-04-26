import { Routes, Route } from 'react-router-dom';
import About from './pages/Aboutus';
import Notfound from './pages/Notfoundpage';
import Main from './pages/Main';
import Form from './pages/Form';
import React from 'react';

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
};
