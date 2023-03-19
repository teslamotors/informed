import React from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';

// Components
import { Admin } from '../Pages/Admin/Admin';
import { NotFound } from '../Pages/NotFound/NotFound';
import { NotAuthorized } from '../Pages/NotAuthorized/NotAuthorized';
import { Home } from '../Pages/Home/Home';
import Intro from '../Pages/GettingStarted/Intro/Intro';
import Setup from '../Pages/GettingStarted/Setup/Setup';
import Hooks from '../Pages/GettingStarted/Hooks/Hooks';
import UseField from '../Pages/ApiReference/UseField';
import UseFieldState from '../Pages/ApiReference/UseFieldState';
import UseFieldApi from '../Pages/ApiReference/UseFieldApi';
import UseFormState from '../Pages/ApiReference/UseFormState';
import UseFormApi from '../Pages/ApiReference/UseFormApi';

// Routes ------------------------------------------------------------
export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Navigate to="/getting-started/intro" />} />
      <Route path="/getting-started">
        <Route path="" element={<Navigate to="/getting-started/intro" />} />
        <Route path="intro" element={<Intro />} />
        <Route path="setup" element={<Setup />} />
        <Route path="hooks" element={<Hooks />} />
      </Route>
      <Route path="/api-reference">
        <Route path="" element={<Navigate to="/api-reference/useField" />} />
        <Route path="useField" element={<UseField />} />
        <Route path="useFieldState" element={<UseFieldState />} />
        <Route path="useFieldApi" element={<UseFieldApi />} />
        <Route path="useFormState" element={<UseFormState />} />
        <Route path="useFormApi" element={<UseFormApi />} />
      </Route>
      <Route path="/home" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/unauthorized" element={<NotAuthorized />} />
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};
