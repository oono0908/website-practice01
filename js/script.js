$(function () {
  $(".js-hamberger,.js-drawer,.js-drawer a").click(function() {
    console.log("kkkkk")
     $(".js-hamberger").toggleClass("is-active")
     $(".js-drawer").fadeToggle()
    })
});
