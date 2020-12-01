window.addEventListener('DOMContentLoaded', () => {

    new WOW().init();

    const tabsContent = document.querySelectorAll('.tabs__content'),
          tabs = document.querySelectorAll('.tabs__link'),
          tabsParent = document.querySelector('.tabs__tab');


    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';

        tabs.forEach(item => {
            item.classList.remove('tabs__link-active');
        });
        });
    }
    
    hideTabContent();
  
    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabs__link-active');
    }

    showTabContent();
 
    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
          if (target && target.classList.contains('tabs__link')) {
              tabs.forEach((item, i) => {
                  if (target == item) {
                      hideTabContent();
                      showTabContent(i);
                  }
              });
          }
    });

    $("a[href^='#']").click(function(){
          const _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
          return false;
        });
});

