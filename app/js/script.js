$(document).ready(function () {

  //search panel desktop

  $(".search-desktop").click(function () {
    $(this).toggleClass("cross");
    if ($(this).hasClass("cross")) {
      $(".search-desktop-image").attr("src", "./images/icons/cross.svg");
      $(".search-panel").css("display", "block");
    } else {
      $(".search-desktop-image").attr("src", "./images/navBar/search.svg");
      $(".search-panel").css("display", "none");
    }

  });

  //search panel mobile

  $(".header__search").click(function () {
    $(this).toggleClass("cross");
    if ($(this).hasClass("cross")) {
      $(".header__search-image").attr("src", "./images/icons/cross.svg");
      $(".search-panel").css("display", "block");
    } else {
      $(".header__search-image").attr("src", "./images/navBar/search.svg");
      $(".search-panel").css("display", "none");
    }
    
  })

  // menu mobile
  $(".header__menu").click(function () {
    console.log('hi');
    $(".one").toggleClass("one-ani");
    $(".two").toggleClass("two-ani");
    $(".menu-panel-mobile").toggleClass("show");
  });

  //menu desktop

  $(".menu-desktop").click(function () {
    $(this).toggleClass("cross");
    if ($(this).hasClass("cross")) {
      $(".menu-desktop-image").attr("src", "./images/icons/cross.svg");
      $(".menu-panel-desktop").css("display", "block");
    } else {
      $(".menu-desktop-image").attr("src", "./images/navBar/menu.svg");
      $(".menu-panel-desktop").css("display", "none");
    }

  })



});

