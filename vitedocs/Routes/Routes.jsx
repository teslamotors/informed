import React from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';

// Components
import { Admin } from '../Pages/Admin/Admin';
import { NotFound } from '../Pages/NotFound/NotFound';
import { NotAuthorized } from '../Pages/NotAuthorized/NotAuthorized';
import { Home } from '../Pages/Home/Home';
import Intro from '../Pages/GettingStarted/Intro/Intro';

// Routes ------------------------------------------------------------
export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Navigate to="/getting-started/intro" />} />
      <Route path="/getting-started">
        <Route path="intro" element={<Intro />} />
      </Route>
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/unauthorized" element={<NotAuthorized />} />
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};
