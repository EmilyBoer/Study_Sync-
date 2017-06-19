

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
      $('.learn').addClass("learn-transition");
      $('.to').addClass("to-transition");
      $('.live').addClass("live-transition");
      $('.most-engaging').addClass("most-engaging-transition");

    } else {
      $('.navbar').removeClass("background");
      $('.nav-transition').removeClass("scroll-margin");
      $('.learn').removeClass("learn-transition");
      $('.to').removeClass("to-transition");
      $('.live').removeClass("live-transition");
      $('.most-engaging').removeClass("most-engaging-transition");

    }
      });

$(window).scroll(function() {

    if ( $(this).scrollTop() > 300 && $(this).scrollTop() < 1150) { 
      $('.education-section-header').addClass("education-fadein");
      $('.name-two').addClass("name-two-fade");
      $('.product-bio').addClass("product-bio-fade");

    } else {
      $('.education-section-header').removeClass("education-fadein");
      $('.name-two').removeClass("name-two-fade");
       $('.product-bio').removeClass("product-bio-fade");

    }

  });


$(window).scroll(function() {

    if ( $(this).scrollTop() > 1300 && $(this).scrollTop() < 2000) { 
      $('.head-shot').addClass("blue");
      $('.head-shot-two').addClass("blue-two");
      $('.head-shot-three').addClass("blue-three");

 

    } else {
      $('.head-shot').removeClass("blue");
      $('.head-shot-two').removeClass("blue-two");
      $('.head-shot-three').removeClass("blue-three");
    
    }

  });


$(window).scroll(function() {

    if ( $(this).scrollTop() > 2800 && $(this).scrollTop() < 3800) { 
      $('.teaching-div').addClass("teaching-impact-fade");
      $('.impact-div').addClass("teaching-impact-fade-two");
  
 

    } else {
      $('.teaching-div').removeClass("teaching-impact-fade");
      $('.impact-div').removeClass("teaching-impact-fade-two");
  
    
    }

  });


      
      $('.product-one').removeClass("product-one-fade");
      $('.product-two').removeClass("product-two-fade");
      $('.head-shot').removeClass("blue", );


     
      $('.product-one').addClass("product-one-fade");
      $('.product-two').addClass("product-two-fade");
      $('.product-three').addClass("product-three-fade");
      

