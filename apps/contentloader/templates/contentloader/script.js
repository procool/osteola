(function ($) {


  var app = $.sammy(function () {

    this.get('/', function () {
      $('.wrapper_content').load('{{ url_for('main:main') }}', '', function(){if( status == "error"){console.log('Hello World!');} });
    });

    this.get('/#person', function () {
      $('.wrapper_content').load('{{ url_for('cabinet:person') }}', '', function(){if( status == "error"){console.log('Hello World!');} });
    });



    this.get('/#map', function () {
      $('.wrapper_content').load('{{ url_for('map:map') }}', '', function(){if( status == "error"){console.log('Hello World!');} });
    });

    this.get('/#doctors', function () {
      $('.wrapper_content').load('{{ url_for('doctors:doctors') }}', '', function(){if( status == "error"){console.log('Hello World!');} });
    });


    this.get('/#expressauth', function () {
      $('.fadedwindow').load('{{ url_for('auth:expressauth') }}', '', function(){

        $('.modal-window').fadeIn(function() {
          $('.window-container').addClass('visible');
        });

        $('.close, .modal-window').click(function() {
          $('.modal-window').fadeOut().end().find('.window-container').removeClass('visible');
        });

        $('.window-container').click(function(event) {
          event.stopPropagation()
        });

      });
    });


    this.get('/#reg', function () {
      $('.wrapper_content').load('{{ url_for('auth:reg') }}', '', function(){

          $('.modal-window').fadeOut().end().find('.window-container').removeClass('visible');
          event.stopPropagation()

      });
    });


    this.get('/#repair', function () {
      $('.wrapper_content').load('{{ url_for('auth:repair') }}', '', function(){

          $('.modal-window').fadeOut().end().find('.window-container').removeClass('visible');
          event.stopPropagation()

      });
    });




    this.get('/#calend', function () {
      $('.wrapper_content').load('{{ url_for('calend:calend') }}', '', function(){

    var cW = calendarWidget('.mycalendar_wrapper', {
        monthes: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        wdays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        draw_day: function($daydiv, day) {
        //    $daydiv.empty()
            $daydiv.css('text-align', 'center');
        //    $daydiv.html(day.getMonth()+1 + '/' + day.getDate() )
        },
        draw_after: function(days) {
            var period_start = days[0].day.getFullYear() + '/' + (days[0].day.getMonth()+1) + '/' + days[0].day.getDate();
            var period_end = days[days.length-1].day.getFullYear() + '/' + (days[days.length-1].day.getMonth()+1) + '/' + days[days.length-1].day.getDate();
            console.log('DAYS: ' + period_start + ' - ' + period_end);
        }
    });

    //cW.redraw(2016, 4);

        });
    });

    this.get('/#cabinet', function () {
      $('.wrapper_content').load('{{ url_for('cabinet:index') }}');
    });

  });

  $(function () {
      app.run()
  });

})(jQuery);

