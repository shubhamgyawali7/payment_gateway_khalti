// AppRoutes.jsx
import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PaymentComplete from "./components/PaymentComplete";
import Home from "./Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/" element={<Home />} />
      <Route path="/payment-complete" element={<PaymentComplete />} />
    </>
  )
);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
