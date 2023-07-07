
        
        
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
                  var revealpoint = 100;

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
                $('.navbar,.modal').addClass('animate');
              }else{
                $('.navbar,.modal').removeClass('animate');
              }
              
              if(scrolled > scroll){
                $('.navbar,.modal').removeClass('sticky');
              }else{
                $('.navbar,.modal').addClass('sticky');
              }
              scroll = $(document).scrollTop();
            });

          });


      //**********************Mobie Sibebar Menu */
      var menu_btn = document.querySelector("#menu-btn")
      var sidebar = document.querySelector("#sidebar")
      var container = document.querySelector(".my-container")
      menu_btn.addEventListener("click", () => {
          sidebar.classList.toggle("active-nav")
          container.classList.toggle("active-cont")
      })



      function DownloadCV() {
        // Path to your CV file
        var cvFilePath = './images/Resume.pdf';
      
        // Create a hidden <a> element
        var link = document.createElement('a');
        link.href = cvFilePath;
        link.download = 'Resume.pdf';
        link.style.display = 'none';
      
        // Append the link to the document body
        document.body.appendChild(link);
      
        // Trigger the click event
        link.click();
      
        // Clean up
        document.body.removeChild(link);
      }


      //**********************Disapears navbar from Logo Page*********** */
     

      
        