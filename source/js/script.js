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
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      initialSlide: 1,

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },
    })
  }

   /* Слайдер Члены НОМИ */
   if(document.querySelector('.members__council-container')) {
    new Swiper ('.members__council-container', {
      slidesPerView: 4,
      spaceBetween: 30,

      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      }
    })
  }

   if(document.querySelector('.members__container')) {
      new Swiper ('.members__container', {
        slidesPerView: 4,
        spaceBetween: 30,

        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        }
      })
    }


}

/* Календарь */

if(document.querySelector('#calendar')) {

  ( function( factory ) {
    if ( typeof define === "function" && define.amd ) {
  
      // AMD. Register as an anonymous module.
      define( [ "../widgets/datepicker" ], factory );
    } else {
  
      // Browser globals
      factory( jQuery.datepicker );
    }
  }( function( datepicker ) {
  
  datepicker.regional.ru = {
    closeText: "Закрыть",
    prevText: "&#x3C;",
    nextText: "&#x3E;",
    currentText: "Сегодня",
    monthNames: [ "Январь","Февраль","Март","Апрель","Май","Июнь",
    "Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ],
    monthNamesShort: [ "Янв","Фев","Мар","Апр","Май","Июн",
    "Июл","Авг","Сен","Окт","Ноя","Дек" ],
    dayNames: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ],
    dayNamesShort: [ "вск","пнд","втр","срд","чтв","птн","сбт" ],
    dayNamesMin: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ],
    weekHeader: "Нед",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: "" };
  datepicker.setDefaults( datepicker.regional.ru );
  
  return datepicker.regional.ru;
  
  } ) );
  var today = new Date();
  var y = today.getFullYear();
  $('#calendar').multiDatesPicker({
    numberOfMonths: [1, 2],
    maxPicks: 2
  });
  
  $('.calendar__reset').on('click', function() {
    $('#calendar').multiDatesPicker('resetDates');
  });
  
  $('.calendar__apply').on('click', function() {
    $('#calendar').multiDatesPicker('getDates');
  });

  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

  function getDates(startDate, stopDate) {
      var dateArray = new Array();
      var currentDate = startDate;
      while (currentDate <= stopDate) {
          dateArray.push(new Date (currentDate));
          currentDate = currentDate.addDays(1);
      }
      return dateArray;
  }

  $('#calendar td').on('click', function() {
    if ($('#calendar td.ui-state-highlight').length === 2)
    {
      var startDate = new Date($('#calendar').multiDatesPicker('getDates')[0]);
      var endDate = new Date($('#calendar').multiDatesPicker('getDates')[1]);
    }
  });
}
