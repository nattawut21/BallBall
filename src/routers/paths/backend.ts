const configuration = {
  name: 'backend.dashboard',
  routers: [
    {
      path: '/backend/dashboard',
      page: () => import('@/pages/Backend/Dashboard'),
    },
  ],
} as const;

export default configuration;

const pathname = configuration.routers.map((i) => i.path);

export type RouterName = typeof configuration.name;
export type BackendPathname = typeof pathname[number];
