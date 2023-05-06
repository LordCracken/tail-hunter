import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from '@pages/Root';
import Main from '@pages/Main';
import Profile from '@pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
]);

const App: React.FC = () => <RouterProvider router={router} />;

export default App;
