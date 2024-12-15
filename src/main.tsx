import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import 'normalize.css';

import AuthRoute from '@/routes/auth-route.tsx';

import App from './App.tsx';

import './index.css';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false, retry: false } },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthRoute>
        <App />
      </AuthRoute>
      <ReactQueryDevtools initialIsOpen={false} position="right" />
    </QueryClientProvider>
  </StrictMode>,
);
