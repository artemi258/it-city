
import WOW from 'wow.js';

import '../sass/style.scss';

new WOW().init();

window.addEventListener('DOMContentLoaded', () => {

    'use strict';

    const tabsContent = document.querySelectorAll('.tabs__content'),
          tabs = document.querySelectorAll('.tabs__link'),
          tabsParent = document.querySelector('.tabs__tab');


    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('wow', 'animate__animated', 'animate__fadeIn');

        tabs.forEach(item => {
            item.classList.remove('tabs__link-active');
        });
        });
    }
    
    hideTabContent();
  
    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('wow', 'animate__animated', 'animate__fadeIn');
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

    // $("a[href^='#']").click(function(){
    //       const _href = $(this).attr("href");
    //       $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    //       return false;
    //     });

    const burger = document.querySelector('.burger'),
          nav = document.querySelector('.header__nav-item ul');
          

          burger.addEventListener('click', () => {
              burger.classList.toggle('burger__active');
              nav.classList.toggle('nav__active');
            });

            function eventCloseNav() {
                if (document.documentElement.clientWidth < 768) {
                    nav.addEventListener('click', (e) => {
                    if (e.target.href) {
                      burger.classList.toggle('burger__active');
                      nav.classList.toggle('nav__active');
                    }
                    });
                };
            }

            window.addEventListener('resize', function() {
                eventCloseNav();
            });
            eventCloseNav();
            

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

        //MODAL

        const btn = document.querySelector('.header__sub-btn'),
              popup = document.querySelector('.popup'),
              popupClose = document.querySelector('.popup__close'),
              input = document.querySelectorAll('input'),
              header = document.querySelector('.header__nav'),
              windowWidth = document.documentElement.clientWidth;

              const width = calcScroll();

            btn.addEventListener('click', () => {
                popup.classList.add('animate__animated', 'wow', 'animate__fadeIn');
                popup.style.display = 'block';
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${width}px`;
                header.style.width = `${windowWidth}px`;
                header.style.right = `${width}px`;
            });
            popupClose.addEventListener('click', () => {
                popup.style.display = 'none';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;
                header.style.right = `0px`;
                header.style.width = '100%';
                popup.classList.remove('animate__animated', 'wow', 'animate__fadeIn');
            });
            popup.addEventListener('click', (e) => {
                if (e.target === popup) {
                    popup.style.display = 'none';
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `0px`;
                    header.style.right = `0px`;
                    header.style.width = '100%';
                    popup.classList.remove('animate__animated', 'wow', 'animate__fadeIn');
                }
            });

                    //FORMS

            const message = {
                loading: 'img/load.gif',
                success: 'img/ok.png',
                error: 'Ошибка'
            };

            const form = document.querySelectorAll('form');

            const  postData = async (url, data) => {
    
                let res = await fetch(url, {
                    method: "POST",
                    body: data
                });
    
                return await res;
                      
            };

            const clearInput = () => {
                input.forEach(item => {
                    item.value = '';
                });
            };

            form.forEach(item => {
                item.addEventListener('submit', (e) => {
                    e.preventDefault();

                    let statusMessage = document.createElement('div');
                    statusMessage.classList.add('popup__status');
                    item.appendChild(statusMessage);

                    let statusImg = document.createElement('img');
                    statusImg.classList.add('popup__status-img');
                    statusImg.setAttribute('src', message.loading);
                    statusMessage.appendChild(statusImg);

                    const formData = new FormData(item);

                    postData('mailer/smart.php', formData)
                    .then(item => {
                        console.log(item);
                        statusImg.setAttribute('src', message.success);
                    })
                    .catch(() => {
                        statusImg.setAttribute('src', message.error);
                    })
                    .finally(() => {
                        clearInput();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 5000);
                    });
                });
            });

            function calcScroll() {
                let div = document.createElement('div');
        
                div.style.width = '50px';
                div.style.height = '50px';
                div.style.overflowY = 'scroll';
                div.style.visibility = 'hidden';
        
        
        
                document.body.appendChild(div);
        
                document.body.appendChild(div);
        
                let scrollWidth = div.offsetWidth - div.clientWidth;
        
                div.remove();
        
        
                return scrollWidth;
            }

            // const tabsItem = document.querySelectorAll('.tabs__item');

            // tabsItem.forEach((item, i) => {
            //     if ( i % 2 == 0) {
            //         item.classList.add('wow', 'animate__animated', 'animate__slideInRight');
            //     } else {
            //         item.classList.add('wow', 'animate__animated', 'animate__slideInLeft');
            //     }

            // })

          

});

