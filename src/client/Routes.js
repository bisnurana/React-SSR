// import React from 'react';
import App from './App';
import Home from './pages/Home';
import NotFound from './pages/404';
import UserLists from './pages/Users';
import AdminLists from './pages/Admins';


export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true,
      },
      {
        ...UserLists,
        path: '/users',
      },
      {
        ...AdminLists,
        path: '/admins',
      },
      { ...NotFound },
    ],

  },
];

