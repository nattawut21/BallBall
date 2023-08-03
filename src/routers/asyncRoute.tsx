import { IRoutePath } from "@/interfaces/global";
import { createElement, lazy } from "react";
import { Route } from "react-router-dom";

export default function routeAsync([route, routeProps, componentProps]: IRoutePath[]): JSX.Element {
  // console.log(route);
  return createElement(Route, {
    ...routeProps,
    path: route.path,
    element: createElement(lazy(route.page), componentProps)
  });
}
