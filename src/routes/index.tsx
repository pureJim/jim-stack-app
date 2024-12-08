import { createBrowserRouter } from 'react-router';

import ErrorPge from '@/components/ErrorPge';
import MainLayout from '@/layouts/Main';
import PlainLayout from '@/layouts/Plain';

import MainRoutes from './main';
import PlainRoutes from './Plain';

const router = createBrowserRouter([
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
]);

export default router;
