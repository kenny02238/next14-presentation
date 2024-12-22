import React from "react";
import CloseBtn from "../../../../components/CloseBtn";

const InterceptingLogin = () => {
  return (
    <div className="flex flex-col items-center fixed border w-full bg-opacity-70 bg-white h-screen">
      <div className="border border-white bg-black bg-opacity-70 p-12 text-3xl">
        InterceptingLogin Modal
      </div>
      <CloseBtn />
    </div>
  );
};

export default InterceptingLogin;
