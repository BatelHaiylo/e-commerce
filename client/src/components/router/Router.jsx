import React from "react";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home,ProductDetails,Confirmation,CheckOut,PageError } from "./router";

//start from the top of the page
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function Router() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item:itemId" element={<ProductDetails />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/checkout/success" element={<Confirmation />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </>
  );
}
