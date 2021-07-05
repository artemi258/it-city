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

    const burger = document.querySelector('.burger'),
          nav = document.querySelector('.header__nav-item ul');

          burger.addEventListener('click', () => {
              burger.classList.toggle('burger__active');
              nav.classList.toggle('nav__active');
          });

          let setCursorPosition = (pos, elem) => {
            elem.focus();
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                let range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };
    
        function createMask(event) {
            let matrix = '+7 (___)-__-__-___',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, ''),
                checkMask = matrix.charAt(1);
    
                if (def.length >= val.length || this.value.charAt(1) !== checkMask) {
                    val = def;
                }
    
                this.value = matrix.replace(/./g, function(a) {
                    return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
                });
    
                if (event.type === 'blur') {
                    if (this.value.length == 2) {
                        this.value = '';
                    }
                } else {
                    setCursorPosition(this.value.length, this);
                }
        }
    
        const inputs = document.querySelectorAll('[name="phone"]');

        inputs.forEach(item => {
            item.addEventListener('input', createMask);
            item.addEventListener('focus', createMask);
            item.addEventListener('blur', createMask);
        });

        const btn = document.querySelector('.header__sub-btn'),
              popup = document.querySelector('.popup'),
              popupClose = document.querySelector('.popup__close'),
              input = document.querySelectorAll('input');

            btn.addEventListener('click', () => {
                popup.style.display = 'block';
            });
            popupClose.addEventListener('click', () => {
                popup.style.display = 'none';
            });
            popup.addEventListener('click', (e) => {
                if (e.target === popup) {
                    popup.style.display = 'none';
                }
            });

            const form = document.querySelectorAll('form');

            const  postData = async (url, data) => {
    
                let res = await fetch(url, {
                    method: "POST",
                    body: data
                });
    
                return await res.text();
                      
            };

            const clearInput = () => {
                input.forEach(item => {
                    item.value = '';
                });
            };

            form.forEach(item => {
                item.addEventListener('submit', (e) => {
                    e.preventDefault();

                    const formData = new FormData(item);

                    postData('mailer/smart.php', formData)
                    .then(item => {
                        console.log(item);
                        clearInput();
                    })
                    .catch(() => {
                        console.log('ошибка');
                    });
                });
            });
});

