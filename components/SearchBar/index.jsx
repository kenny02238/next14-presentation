import React from "react";

const SearchBar = async () => {
  const data = await fetch("https://dummyjson.com/products/2?delay=3000");
  const res = await data.json();
  return <div>SearchBar</div>;
};

export default SearchBar;
