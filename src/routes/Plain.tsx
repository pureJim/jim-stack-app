import { lazy } from 'react';
import { RouteObject } from 'react-router';

import LazyLoad from './lazy-load';

const PlainRoutes: RouteObject[] = [
  {
    path: 'preview',
    element: LazyLoad(lazy(() => import('@/views/Preview'))),
  },
  {
    path: '401',
    element: LazyLoad(lazy(() => import('@/components/RedirectPage/AuthPage'))),
  },
];

export default PlainRoutes;
