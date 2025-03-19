document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const mobileNav = document.getElementById("mobile-nav");

  if (menuIcon && mobileNav) {
    menuIcon.addEventListener("click", () => {
      mobileNav.classList.toggle("active");
    });
  } else {
    console.error("Menu icon or mobile navigation not found.");
  }
});
