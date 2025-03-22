import { ReactNode } from "react";
import RouterProvider from "./routesProvider/RouterProvider";

export default function RootProvider({ children }: { children: ReactNode }) {
  return <RouterProvider>{children}</RouterProvider>;
}
