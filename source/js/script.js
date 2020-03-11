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

   /* Слайдер Члены НОМИ */
   if(document.querySelector('.members__council-container')) {
    new Swiper ('.members__council-container', {
      // Optional parameters
      slidesPerView: 4,
      spaceBetween: 30,

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      }
    })
  }

   if(document.querySelector('.members__container')) {
      new Swiper ('.members__container', {
        // Optional parameters
        slidesPerView: 4,
        spaceBetween: 30,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        }
      })
    }


}

/* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */

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
	prevText: "&#x3C;Пред",
	nextText: "След&#x3E;",
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

$('.reset1').on('click', function() {
  $('#calendar').multiDatesPicker('resetDates');
});

$('.go').on('click', function() {
  $('#calendar').multiDatesPicker('getDates');
  $('.result').append($('#mdp-demo').multiDatesPicker('getDates'));
});
