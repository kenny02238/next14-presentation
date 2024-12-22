import React from "react";
import Header from "./Header";

const Layout = ({ children, boo, foo }) => {
  return (
    <div className="flex flex-col gap-3 w-full h-screen justify-center items-center">
      <Header />
      {children}
      <div className="flex gap-3">
        {boo}
        {foo}
      </div>
    </div>
  );
};

export default Layout;
