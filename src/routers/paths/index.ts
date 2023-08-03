import { IRoutePath } from "@/interfaces/global";
import PathBackend, { BackendPathname, RouterName } from "./backend";

// export default [...PathBackend.routers] as IAsyncRoute;
export default [...PathBackend.routers] as IRoutePath[];

export type RouteName = RouterName;
export type Pathname = BackendPathname;
