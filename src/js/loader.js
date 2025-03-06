const loaderWrapper = document.querySelector(".loaderWrapper");

export const showLoader = (status) => {
  if (status) {
    loaderWrapper.classList.remove("hidden");
  }
  loaderWrapper.classList.add("hidden");
};
