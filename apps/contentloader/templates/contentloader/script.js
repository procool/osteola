(function ($) {

  var app = $.sammy(function () {

    this.get('/', function () {
      $('.maincontent').load('{{ url_for('main:main') }}', '', function(){if( status == "error"){console.log('Hello World!');} });
    });

    this.get('/#calend', function () {
      $('.maincontent').load('{{ url_for('calend:calend') }}', '', function(){

$( document ).ready(function() {
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
    });

    this.get('/#cabinet', function () {
      $('.maincontent').load('{{ url_for('cabinet:index') }}');
    });

  });

  $(function () {
      app.run()
  });

})(jQuery);

