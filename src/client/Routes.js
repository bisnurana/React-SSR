// import React from 'react';
import Home from './pages/Home';
import UserLists, { loadData } from './pages/Users';


export default [
  {
    ...Home,
    path: '/',
    exact: true,
  },
  {
    ...UserLists,
    path: '/users',
  },
];
