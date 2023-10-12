window.onload = function () {
  const menu_btn = document.querySelector(".burger");
  const menu_btnx = document.querySelector(".burger-x");
  const mobile_menu = document.querySelector(".mobileNav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    menu_btnx.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
  });

  menu_btnx.addEventListener("click", function () {
    mobile_menu.classList.remove("is-active"); // Close the menu
    menu_btnx.classList.remove("is-active"); // Remove the "X" icon
    menu_btn.classList.remove("is-active"); // Remove the "burger" icon
  });
};
