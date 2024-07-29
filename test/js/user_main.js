
$(document).ready(function() {
    $(window).scroll(function() {
      $('.text-item4, .text-item5, .text-item6, .text-item7, .text-item8, .text-item9').each(function(index) {
        var element = $(this);
        var bottom_of_element = element.offset().top + element.outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
  
       if (bottom_of_window > bottom_of_element) {
          element.animate({ 'opacity': '1', 'margin-left': '0px' }, 500);
        }
      });
      $('.text-item, .text-item2, .text-item3').each(function(index) {
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
  
       if (bottom_of_window > bottom_of_element) {
          element.animate({ 'opacity': '1', 'margin-left': '0px' }, 500);
        }
      });
    });
  });
  
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  
  function countTo(target, element) {
    var current = 0;
    var step = Math.ceil(target / 100); // Adjust the step size as needed
    
    var interval = setInterval(function() {
      current += step;
      
      if (current >= target) {
        clearInterval(interval);
        current = target;
      }
      
      element.textContent = current;
    }, 10); // Adjust the interval duration as needed
  }
  
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        var counterElements = reveals[i].querySelectorAll('.counter-num');
        counterElements.forEach(function(element) {
          var target = parseInt(element.textContent);
          countTo(target, element);
        });
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  
  window.addEventListener("scroll", reveal);
  
  const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
           console.log(entry)
           if (entry.isIntersecting) {
              entry.target.classList.add('show');
           } else{
              entry.target.classList.remove('show');
           }
        });
     });
  
     const hiddenElements = document.querySelectorAll('.hidden');
     hiddenElements.forEach((el) => observer.observe(el));
  
  
  