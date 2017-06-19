

    $(document).ready(function () {
      $(".menu-btn a").click(function () {
        $(".overlay").fadeToggle(200);
        $("span.top-bar").toggleClass('btn-open-two');
        $("span.bottom-bar").toggleClass('btn-open-one');
        
      });
        });



$(window).scroll(function() {
    if ($(this).scrollTop() > 200){ // Set position from top to add class
      $('.navbar').addClass("background");
      $('.nav-transition').addClass("scroll-margin");
      $('.name').addClass("opacity-one");
      $('.bio').addClass("opacity-two");

    } else {
      $('.navbar').removeClass("background");
      $('.nav-transition').removeClass("scroll-margin");
      $('.name').removeClass("opacity-one");
      $('.bio').removeClass("opacity-two");

    }
      });

$(window).scroll(function() {

    if ( $(this).scrollTop() > 300 && $(this).scrollTop() < 950) { 
      $('.education-section-header').addClass("blue");
      $('.name-two').addClass("name-two-fade");
      $('.product-bio').addClass("product-bio-fade");
      $('.product-one').removeClass("product-one-fade");
      $('.product-two').removeClass("product-two-fade");
      $('.product-three').removeClass("product-three-fade");

    } else {
      $('.education-section-header').removeClass("blue");
      $('.name-two').removeClass("name-two-fade");
      $('.product-bio').removeClass("product-bio-fade");
      $('.product-one').addClass("product-one-fade");
      $('.product-two').addClass("product-two-fade");
      $('.product-three').addClass("product-three-fade");
      
    }

  });





