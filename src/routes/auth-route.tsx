import { matchRoutes, Navigate } from 'react-router';

import { rootRoutes } from './index';

const whiteList = ['/401', '/403', '/404'];

const AuthRoute = ({ children }: { children: JSX.Element }) => {
  const pathname = window.location.pathname;

  // 页面白名单放行
  if (whiteList.includes(pathname)) {
    return children;
  }

  // 无匹配路由
  const mapRoutes = matchRoutes(rootRoutes, { pathname });
  if (!mapRoutes || mapRoutes.length === 0) {
    return <Navigate to="/404" replace />;
  }

  // 获取当前路由信息
  const curRoute = mapRoutes.find((item) => item.route.meta?.key && pathname.includes(item.route.meta?.key));

  // 设置标题
  document.title = curRoute?.route.meta?.title || 'Jim Stack';

  return children;
};

export default AuthRoute;
