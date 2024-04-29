import React from 'react';
import { Routes, Route } from 'react-router-dom';

import AdminDashboard from '../pages/admin/AdminDashboard';
import AssistantDashboard from '../pages/assistant/AssistantDashboard';
import HeadmasterDashboard from '../pages/headmaster/HeadmasterDashboard';
import InspectorDashboard from '../pages/inspector/InspectorDashboard';
import TeacherDashboard from '../pages/teacher/TeacherDashboard';
import Error404 from '../pages/error/Error404';
import Error403 from '../pages/error/Error403';
import Error400 from '../pages/error/Error400';
import Error500 from '../pages/error/Error500';
import Error503 from '../pages/error/Error503';
import LockScreen from '../pages/error/LockScreen';
import MainLayout from './MainLayout';
import ScrollToTop from '../layout/scrollToTop';



const RoutesMarkup = () => {
  const allRoutes = [
    { url: "/AdminDashboard", component: AdminDashboard },
    { url: "/AssistantDashboard", component: AssistantDashboard },
    { url: "/HeadmasterDashboard", component: HeadmasterDashboard },
    { url: "/InspectorDashboard", component: InspectorDashboard },
    { url: "/TeacherDashboard", component: TeacherDashboard },

  ];

  const NotFound = () => <Error404 />;

  return (
    <>
      <Routes>
        <Route path='/page-lock-screen' element={<LockScreen />} />
        <Route path='/page-error-400' element={<Error400 />} />
        <Route path='/page-error-403' element={<Error403 />} />
        <Route path='/page-error-404' element={<Error404 />} />
        <Route path='/page-error-500' element={<Error500 />} />
        <Route path='/page-error-503' element={<Error503 />} />

        <Route element={<MainLayout />}>

          {allRoutes.map((data, i) => (
            <Route
              key={i}
              path={data.url}
              element={<data.component />}
            />
          ))}
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </>
  );
};

export default RoutesMarkup;
