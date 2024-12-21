import React from "react";

const Header = async () => {
  const data = await fetch("https://dummyjson.com/products/1?delay=1000");
  const res = await data.json();
  return <div>Header</div>;
};

export default Header;
