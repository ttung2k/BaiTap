const buyBtns = document.querySelectorAll('.js-buy-tickets');
            const modal = document.querySelector('.js-modal');
            const modalContainer = document.querySelector('.js-modal-container');
            const modalClose = document.querySelector('.js-model-close');

            //Hiển thị modal
            function showBuyTickets() {
                modal.classList.add('open');
            }

            //Ẩn model
            function hideTickets() {
                modal.classList.remove('open');
            }

            //Lặp qua từng thẻ button và nghe hành vi click
            for (const buyBtn of buyBtns) {
                buyBtn.addEventListener('click', showBuyTickets);
            }

            //Nghe hành vi click qua button close
            modalClose.addEventListener('click', hideTickets)


            modal.addEventListener('click', hideTickets)

            modalContainer.addEventListener('click', function (event) {
                event.stopPropagation();
            })


        var header = document.getElementById('header');
        var mobileMenu = document.getElementById('mobile-menu');
        var nav = document.getElementById('nav')
        var headerHeight = header.clientHeight;
        var navHeight = nav.clientHeight;


        // Dong mo mobile menu
        mobileMenu.onclick=function(){
          var isClose = header.clientHeight === headerHeight ;
          var isClose = nav.clientHeight === navHeight;

          if(isClose){
              header.style.height='auto';
              nav.style.height = 'auto';
          }
          else{
              header.style.height=null;
              nav.style.height = null;
          }
        }

// 
        var menuItems = document.querySelectorAll('.nav li a[href*="#"]');


        for(var i = 0; i< menuItems.length; i++){
            var menuItem = menuItems[i];
            


          menuItem.onclick = function(event){
            var isParentMenu =  this.nextElementSibling && this.nextElementSibling.classList.contains('navsub')
            if(isParentMenu){
                 event.preventDefault();  
                
            }else{
                header.style.height = null;
                nav.style.height = null;
            }

             
          }
        }      
  