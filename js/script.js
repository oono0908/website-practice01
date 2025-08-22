$(function () {
  $(".js-hamberger,.js-drawer,.js-drawer__item a").click(function() {
     $(".js-hamberger").toggleClass("is-active")
     $(".js-drawer").fadeToggle()
    })
});

const mySwiper = new Swiper ('.swiper', {
  loop: true,
  autoplay: { 
  delay: 3000,
  },
});

$(function () {
     $(".js-accordion__item:first-child .js-accordion__text").css("display", "block")
     $(".js-accordion__item:first-child .js-accordion__title").addClass("is-open")
     $(".js-accordion__title").click(function() {
      $(this).toggleClass("is-open")
      $(this).next().slideToggle(300)
    })
});

