import { lazy } from 'react';
import { RouteObject } from 'react-router';

import LazyLoad from './lazy-load';

const PlainRoutes: RouteObject[] = [
  {
    path: 'preview',
    element: LazyLoad(lazy(() => import('@/views/Preview'))),
  },
];

export default PlainRoutes;
