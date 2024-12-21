import React from "react";

const Content = async () => {
  const data = await fetch("https://dummyjson.com/products/3?delay=3000");
  const res = await data.json();
  return <div>Content</div>;
};

export default Content;
