$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger,.header-nav').toggleClass('active');
        $('body').toggleClass('lock');
    })
})

$(document).ready(function() {
    $('.cars-variants').slick({
        dots: true,        
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: false,
        arrows: true,       
        prevArrow: ('#arrow-left-show'),
        nextArrow: ('#arrow-right-show'),        
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: true,       
                prevArrow: ('#arrow-left-hid'),
                nextArrow: ('#arrow-right-hid'),
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: true,       
                prevArrow: ('#arrow-left-hid'),
                nextArrow: ('#arrow-right-hid'),
            }
          }          
        ]
      });
  });

  $(document).ready(function() {
    $('.stories').slick({
        dots: true,        
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: false,
        arrows: false,       
        prevArrow: ('#arrow-left-stories'),
        nextArrow: ('#arrow-right-stories'),        
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
              arrows: true,       
                prevArrow: ('#arrow-left-stories'),
                nextArrow: ('#arrow-right-stories'),
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: true,       
                prevArrow: ('#arrow-left-stories'),
                nextArrow: ('#arrow-right-stories'),
            }
          }          
        ]
      });
  });