import React from "react";
import Header from "./Header";

const layout = ({ children, modal }) => {
  return (
    <div className="flex justify-center items-center w-full h-screen flex-col">
      <Header />
      {children}
      {modal}
    </div>
  );
};

export default layout;
