import { lazy } from 'react';
import { RouteObject } from 'react-router';

import LazyLoad from './lazy-load';

const MainRoutes: RouteObject[] = [
  {
    index: true,
    path: '/',
    element: LazyLoad(lazy(() => import('@/views/home'))),
  },
  {
    path: 'editor',
    element: LazyLoad(lazy(() => import('@/views/editor'))),
  },
];

export default MainRoutes;


