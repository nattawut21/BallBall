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
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: React.ReactNode; // เพิ่ม children ใน ModalProps
}
 