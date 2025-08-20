$(function () {
  $(".js-hamberger,.js-drawer,.js-drawer a").click(function() {
    console.log("kkkkk")
     $(".js-hamberger").toggleClass("is-active")
     $(".js-drawer").fadeToggle()
    })
});

const mySwiper = new Swiper ('.swiper', {

  loop: true,
});
