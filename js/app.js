$(document).ready(function() {
  $('.header__hamburger').on("click", function() {
    $(this).toggleClass("active");
  });
  $('.header__menu-container li').on("click", function() {
    $(this).toggleClass("active");
  });
});
