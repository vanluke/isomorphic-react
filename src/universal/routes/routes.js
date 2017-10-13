import {
  Root,
  Home,
  Test,
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
        path: '/test',
        component: Test,
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