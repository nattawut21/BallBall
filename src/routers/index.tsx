/* eslint-disable no-param-reassign */
import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Loading from "@/components/public/Loading";
import PrivateRoute from "./PrivateRoute";
import asyncRoute from "./asyncRoute";
import paths from "./paths";
import NotFoundPage from "@/pages/NotFound";
import AuthenticationPage from "@/pages/Authentication";
import Home from "@/pages/Home";

function ApplicationRouter(): any {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<AuthenticationPage.SignInPage />} />
          <Route path="/backend" element={<PrivateRoute />}>
            {asyncRoute(paths)}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default ApplicationRouter;
