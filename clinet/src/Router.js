import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route path='*' element={<NotFound />} />

      <Route path='/' element={<Home />} />

      {/* <Route path='/' element={<Home />} exact /> */}
      {/* <Route path='*' element={<NotFound />} /> */}
      {/* <Route path='*' element={<NotFound />} /> */}
    </Routes>
  );
};

export default Router;
