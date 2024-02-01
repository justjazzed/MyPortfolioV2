

        
        // function imgSlider(anything){
        //     document.querySelector('.Starbucks').src = anything;
        // }
        // function changeCircleColor(color){
        //     const circle = document.querySelector('.circle')
        //     circle.style.background = color;
        // }


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
        var cvFilePath = './images/Jasbar Alberca Legaspina Resume.pdf';
      
        // Create a hidden <a> element
        var link = document.createElement('a');
        link.href = cvFilePath;
        link.download = 'JasbarLegaspinaResume.pdf';
        link.style.display = 'none';
      
        // Append the link to the document body
        document.body.appendChild(link);
      
        // Trigger the click event
        link.click();
      
        // Clean up
        document.body.removeChild(link);
      }

     

      //**********************LOOPING TEXT*********** */
      document.addEventListener("DOMContentLoaded", function() {
        const textSequence = [
          "Graphics and Web Designer",
          "Feel free to Explore.",
          "Thank you!",
        ];
        const typingSpeed = 100; // Adjust the speed (in milliseconds) to control the typing speed.
        const eraseSpeed = 50; // Adjust the speed (in milliseconds) to control the erasing speed.
        const pauseBeforeErase = 2000; // Adjust the pause duration (in milliseconds) before erasing the text.
        const pauseBeforeChange = 1000; // Adjust the pause duration (in milliseconds) before changing to the next text.
      
        let textContainer = document.querySelector(".typing-text");
        let cursorContainer = document.createElement("span");
        cursorContainer.className = "typing-cursor";
        textContainer.appendChild(cursorContainer);
      
        let sequenceIndex = 0;
      
        function typeText(text, index, callback) {
          if (index < text.length) {
            textContainer.textContent += text.charAt(index);
            setTimeout(function() {
              typeText(text, index + 1, callback);
            }, typingSpeed);
          } else {
            setTimeout(callback, pauseBeforeChange);
          }
        }
      
        function eraseText(index, callback) {
          let currentText = textContainer.textContent;
          if (index >= 0) {
            textContainer.textContent = currentText.substring(0, index);
            setTimeout(function() {
              eraseText(index - 1, callback);
            }, eraseSpeed);
          } else {
            setTimeout(callback, pauseBeforeChange);
          }
        }
      
        function changeText() {
          cursorContainer.style.display = "none"; // Hide the cursor
          setTimeout(function() {
            eraseText(textContainer.textContent.length - 1, function() {
              cursorContainer.style.display = "inline-block"; // Show the cursor
              sequenceIndex = (sequenceIndex + 1) % textSequence.length; // Move to the next text in the sequence
              let currentText = textSequence[sequenceIndex];
              typeText(currentText, 0, changeText);
            });
          }, pauseBeforeErase);
        }
      
        changeText();
      });
      

     

      
        