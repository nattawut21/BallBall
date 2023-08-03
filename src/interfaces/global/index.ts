import { Pathname, RouteName } from '@/routers/paths';
import { ComponentType } from 'react';

export interface ConfigRoutePath {
  name: RouteName;
  routers: Array<IRoutePath>;
}
export interface IRoutePath {
  path: Pathname;
  page: () => Promise<{ default: ComponentType<any> }>;
}
