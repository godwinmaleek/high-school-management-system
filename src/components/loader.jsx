import React from "react";

let isLoading = false;

export function togglePageLoader() {
  isLoading = !isLoading;
  if (isLoading === true) {
    document.getElementById("loader").style.display = "flex";
  } else {
    document.getElementById("loader").style.display = "none";
  }
}

const Loader = () => {
  return (
    <div id="loader" className="loaderContainer">
      <span className="loader h-[60px] w-[60px] lg:w-[80px] lg:h-[80px]"></span>
    </div>
  );
};

export default Loader;
