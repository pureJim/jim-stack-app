declare namespace Route {
  interface MetaProps {
    title?: string;
    auth?: boolean;
    role?: string[];
    exact?: boolean;
    /** 当前路径 */
    key?: string;
    hideInMenu?: boolean;
  }

  type TRouteObject = import('react-router').RouteObject & {
    children?: TRouteObject[];
    meta?: MetaProps;
  };
}
