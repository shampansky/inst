window.onload = function() {
  /* Masonry Об институте права */

  var aboutEl = document.querySelector('.about__list');
  if(aboutEl) {
    var aboutGrid = new Masonry( aboutEl, {
      // options
      itemSelector: '.about__item',
      columnWidth: 362,
      gutter: 30,
      percentPosition: true
    });
  }

  /* Masonry галерея */



  var masonryEl = document.querySelectorAll('.masonry__list');

  if(masonryEl) {
    var arr = Array.prototype.slice.call( masonryEl, 0 );
    arr.forEach(function(item) {
      new Masonry( item, {
        // options
        itemSelector: '.masonry__item',
        columnWidth: 264,
        gutter: 30,
        percentPosition: true
      });
    });

  }

  /* Заголовок для блока с рассылкой */

  var newsletterSelectEl = document.getElementById('category');
  var newsletterTitle = document.querySelector('.newsletter__title');

  var titles = {
    all: 'Будьте в курсе новостей',
    vacancy: 'Будьте в курсе вакансий',
    events: 'Будьте в курсе мероприятий',
    news: 'Будьте в курсе новостей'
  }

  var showNewsletterTitle = function() {
    var selectedItem = newsletterSelectEl.options[newsletterSelectEl.selectedIndex].value;
    newsletterTitle.textContent = titles[selectedItem];
  };

  if(newsletterSelectEl) {
    showNewsletterTitle();

    newsletterSelectEl.addEventListener('change', showNewsletterTitle);
  }

  /* Слайдер новостей */

  if(document.querySelector('.articles')) {
    new Swiper ('.articles', {
      // Optional parameters
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      initialSlide: 1,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  }
}









