$( document ).ready(function() {


    $('.promo__burger').on('click', function(){

        $('.promo__menu').toggleClass('open');

    });

    $('.promo__menu-item').on('click', function(){

        if($('.promo__menu').hasClass('open')){
            $('.promo__menu').removeClass('open');
        }

    });

    $('html, body').on('click', function(e){

        if($('.promo__menu').hasClass('open') && !$(e.target).is('.promo__menu, .promo__menu-item, .promo__burger')){
            $('.promo__menu').removeClass('open');
        }

    });





// ======================================================

    $('.promo__menu-item').on('click', function(event){
        $('.promo__menu-item').removeClass('active');
        $(this).addClass('active');
        // event.preventDefault();

    });


    $('.slider__body').slick({
        prevArrow:'<button type="button" class="slick-button slick-prev">Previous</button>',
        nextArrow:'<button type="button" class="slick-button slick-next">Next</button>',
        autoplay:true,
        infinite:true,
      });

      $(".tab-item").not(":first").fadeOut();
      $(".wrapper .tab").click(function() {
          $(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
          $(".tab-item").hide().eq($(this).index()).fadeIn(500)
      }).eq(0).addClass("active");


      $('#fullpage').fullpage({
        anchors: ['block1', 'block2', 'block3', 'block4'],
        menu: 'promo__menu-list',
        css3: true,
        scrollingSpeed: 800
    });


    // var button = $('.button-up');	
    // $(window).scroll (function () {
    //   if ($(this).scrollTop () > 1000) {
    //     button.fadeIn();
    //   } else {
    //     button.fadeOut();
    //   }
    // });	
    
    // button.on('click', function(){
    
    // });	

   





    });