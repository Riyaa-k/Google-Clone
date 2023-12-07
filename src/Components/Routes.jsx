import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Results from './Results';

const AppRoutes = () => {
  return (
    <div className='p-6'>
      <Routes>
        {/* Redirect from the root path to "/search" */}
        <Route
          path="/"
          element={<Navigate to="/search" />}
        />
        {/* Your other routes */}
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={ <Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;


