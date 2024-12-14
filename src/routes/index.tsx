import { lazy } from 'react';
import { createBrowserRouter } from 'react-router';

import ErrorPge from '@/components/ErrorPge';
import MainLayout from '@/layouts/main';
import PlainLayout from '@/layouts/plain';

import LazyLoad from './loader/lazy-load';
import MainRoutes from './main';
import PlainRoutes from './Plain';

export const rootRoutes: Route.TRouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPge />,
    children: [...MainRoutes],
  },
  {
    path: '/plain',
    element: <PlainLayout />,
    children: [...PlainRoutes],
  },
  {
    path: '/login',
    element: LazyLoad(lazy(() => import('@/views/login'))),
  },

  {
    path: '401',
    element: LazyLoad(lazy(() => import('@/components/RedirectPage/AuthPage'))),
  },
  {
    path: '404',
    element: LazyLoad(lazy(() => import('@/components/RedirectPage/NotFoundPage'))),
  },
];

const router = createBrowserRouter(rootRoutes);

export default router;
