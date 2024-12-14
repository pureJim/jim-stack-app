import { lazy } from 'react';

import AuthLoader from './loader/auth-loader';
import LazyLoad from './loader/lazy-load';

const MainRoutes: Route.TRouteObject[] = [
  {
    index: true,
    path: '',
    element: LazyLoad(lazy(() => import('@/views/home'))),
  },
  {
    path: 'editor',
    element: LazyLoad(lazy(() => import('@/views/editor'))),
    loader: AuthLoader,
  },
];

export default MainRoutes;
