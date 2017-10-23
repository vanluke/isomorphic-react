import {
  Root,
  Home,
  About,
  Accommodations,
  NotFound,
} from '../../bundles';

export const routes = [
  {
    component: Root,
    path: '/',
    routes: [
      {
        exact: true,
        path: '/home',
        component: Home,
      },
      {
        path: '/about',
        component: About,
      },
      {
        path: '/accommodations',
        component: Accommodations,
      },
    ],
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;