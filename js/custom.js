
        function imgSlider(anything){
            document.querySelector('.Starbucks').src = anything;
        }
        function changeCircleColor(color){
            const circle = document.querySelector('.circle')
            circle.style.background = color;

        }


              // *********************************Fade in scroll****************************************


        window.addEventListener('scroll',reveal)

              function reveal(){
                  var reveals = document.querySelectorAll('.reveal');

                  for(var i=0; i < reveals.length; i++){

                  var windowheight = window.innerHeight;
                  var revealtop = reveals[i].getBoundingClientRect().top
                  var revealpoint = 150;

                  if(revealtop <windowheight - revealpoint){
                      reveals[i].classList.add('active');
                  }
                  else{
                      reveals[i].classList.remove('active');  
                      
                  }
              }            
}

   // **********************************auto hide navbar****************************//
        // {
        // const navbar = document.querySelector(".navbar");
        //       let lastScrollY = window.scrollY;

        //       window.addEventListener("scroll",()=>{
        //         if(lastScrollY < window.scrollY){
        //           navbar.classList.add("nav--hidden");
        //         }else{
        //           navbar.classList.remove("nav--hidden");
        //         }
        //         lastScrollY = window.scrollY;
        //       });
        //         }

          $(function(){
            var scroll = $(document).scrollTop();
            var navHeight = $('.navbar').outerHeight();

            $(window).scroll(function(){
              var scrolled = $(document).scrollTop();
              if(scrolled > navHeight){
                $('.navbar').addClass('animate');
              }else{
                $('.navbar').removeClass('animate');
              }
              
              if(scrolled > scroll){
                $('.navbar').removeClass('sticky');
              }else{
                $('.navbar').addClass('sticky');
              }
              scroll = $(document).scrollTop();
            });

          });