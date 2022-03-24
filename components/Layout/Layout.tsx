import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children }: Props) {
  return (
    <div className="body">
      <div className="preloader">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
