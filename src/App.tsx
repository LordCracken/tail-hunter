import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '@pages/Root';
import Main from '@pages/Main';
import Profile from '@pages/Profile';
import NotFound from '@pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: 'profile', element: <Profile /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

const App: React.FC = () => <RouterProvider router={router} />;

export default App;
