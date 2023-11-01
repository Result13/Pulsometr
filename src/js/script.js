/*$(document).ready(function(){
  $('.carousel__inner').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:'<button type="button" class="slick-prev"><img src="icons/left.png"></img></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></img></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
        arrows: false
      }
    }
  ]
})
});*/
$(document).ready(function(){
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });
  
  function toggleSlide(item){
    $(item).each(function(i) {
    $(this).on('click', function(e){
      e.preventDefault();
      $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
      $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
  });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');
  //modal
  $('[data-modal=consultation]').on('click', function(){
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function(){
    $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
  });

  $('.button_mini').each(function(i){
    $(this).on('click', function(){
      $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
      $('.overlay, #order').fadeIn('slow');
    })
  });
  $('#buy').on('click', function(){
    $('#order').fadeOut('slow');
    $('#thanks').fadeIn('slow');
  })
  //валидация документация "https://jqueryvalidation.org/category/plugin/"
  
  function valideForms(form){
    $(form).validate({
      rules:{
      name: "required",
      phone: "required",
      email: {
        required:true,
        email: true
      }
    },
    messages: {
      name: "Введите свое имя",
      phone: "Введите свой номер",
      email: {
        required: "Введите свою почту",
        email: "Неправильно введен адрес"
      }
    }
    });
  };
  valideForms('#consultation form');
  valideForms('#consultation-form');
  valideForms('#order form');
  //маска телефона дкументация: https://github.com/digitalBush/jquery.maskedinput
  $('input[name=phone]').mask("+7 (999) 999-99-99");
});
//карусель
 const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false,
    autoplayButtonOutput: false
  });
  document.querySelector('.slick-prev').addEventListener('click', function() {
  slider.goTo('prev');
});
document.querySelector('.slick-next').addEventListener('click', function() {
  slider.goTo('next');
});
