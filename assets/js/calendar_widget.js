

var calendarWidget = function(divid, opts) {
    if (!opts) 
        opts = {};

    var baseClass = function() {
        this.divwrapper = divid || '#calendar';
        this.$divwrapper = $(divid).first();
        if (this.$divwrapper.get().length == 0) {
            console.error('Calendar Widget Error: Div "' + this.divwrapper + '" not found! may be page not loaded?');
            return;
        }
        this.l10n_wdays = opts.wdays || ['Mon', 'Tue', 'Wed', 'Thd', 'Fri', 'Sat', 'Sun'];
        this.l10n_monthes = opts.monthes || ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.init();
        return this;
    }
    var proto = baseClass.prototype;

    proto.class_prefix = opts.class_prefix || 'calendar_widget_';
    
    proto.init = function() {
        console.log('Init calendar in: ' + this.divwrapper);
        this.now_date = new Date();
        this.redraw(this.now_date.getFullYear(), this.now_date.getMonth());
    }

    proto.redraw = function(year, month) {
        this._get_dates(year, month);
        this._draw();
    }

    proto._draw = function() {
        this.$divwrapper.empty();
        this._draw_header();
        this._draw_lines();
    }

    proto._draw_header = function() {
        this.$header_wrap = $('<div class="'+this.class_prefix+'header"></div>');
        this.$divwrapper.append(this.$header_wrap);
        var $buttons_wrap = $('<div class="'+this.class_prefix+'buttons_wrap"></div>');
        var $buttons = $('<div class="'+this.class_prefix+'buttons"></div>');
        $buttons_wrap.append($buttons);
        this.$header_wrap.append($buttons_wrap);
        this.$header_wdays = $('<div class="'+this.class_prefix+'wdays"></div>');
        this.$header_wrap.append(this.$header_wdays);

        var $bt_year_prev = $('<div class="'+this.class_prefix+'bt_year_prev">&lt;&lt;</div>');
        $buttons.append($bt_year_prev);

        var $bt_month_prev = $('<div class="'+this.class_prefix+'bt_month_prev">&lt;</div>');
        $buttons.append($bt_month_prev);

        var $date_ = $('<div class="'+this.class_prefix+'_header_date"></div>');
        $buttons.append($date_);
        //$date_.html((this.selected_date.getMonth()+1) + '/' + this.selected_date.getFullYear());
        $date_.html(this.l10n_monthes[this.selected_date.getMonth()] + ', ' + this.selected_date.getFullYear());

        var $bt_month_next = $('<div class="'+this.class_prefix+'bt_month_next">&gt;</div>');
        $buttons.append($bt_month_next);

        var $bt_year_next = $('<div class="'+this.class_prefix+'bt_year_next">&gt;&gt;</div>');
        $buttons.append($bt_year_next);

        var this_ = this;
        $bt_year_prev.on('click', function(e) {
            this_.redraw(this_.selected_date.getFullYear()-1, this_.selected_date.getMonth());
        });
        $bt_year_next.on('click', function(e) {
            this_.redraw(this_.selected_date.getFullYear()+1, this_.selected_date.getMonth());
        });

        $bt_month_prev.on('click', function(e) {
            this_.redraw(this_.selected_date.getFullYear(), this_.selected_date.getMonth()-1);
        });
        $bt_month_next.on('click', function(e) {
            this_.redraw(this_.selected_date.getFullYear(), this_.selected_date.getMonth()+1);
        });


    }

    proto._get_dates = function(year, month) {
        this.selected_date = new Date(year, month, 1)
        var first_wday = this.selected_date.getDay();
        if (first_wday == 0)
            first_wday = 7;
        // In calendar first item must be monday, so get first day in calendar:
        var day = new Date(year, month, 2-first_wday)
        //console.log('FIRST WDAY: ' + first_wday + '; CAL: ' + day);
        this.dates = [day];

        for (var i=1; i<42; i++) {
            this.dates.push(new Date(day.getFullYear(), day.getMonth(), day.getDate()+i));
            //console.log('Next Day: ' + this.dates[this.dates.length-1]);
        }
    } 

    proto._draw_lines = function() {
        this.$lines_wrap = $('<div class="'+this.class_prefix+'lines"></div>');
        this.$lines_wrap.hide();
        this.$divwrapper.append(this.$lines_wrap);
        counter = 0;
        var $line = this._draw_linediv();
        var days = [];
        for (var i=0; i<this.dates.length; i++) {
            if (counter >= 7)
                counter=0, $line = this._draw_linediv();
            var $day = this._draw_day($line, this.dates[i]);
            days[i] = {$day: $day, wday: counter, day: this.dates[i]};
            counter++;
        }

        var this_ = this;
        setTimeout(function() { this_._draw_lines_after(days); }, 0);

    } 

    proto._draw_lines_after = function(days) {
        var wm_ = this.$divwrapper.width();
        w_ = 0;
        for (var i=0; i<days.length; i++) {
            // Get paddings, margins, borders width, height (of $day):
            var w_d = days[i].$day.outerWidth(true) - days[i].$day.width();
            w_ = parseInt(wm_/7 - w_d) + 'px';
            days[i].$day.css('width', w_);
            var h_d = days[i].$day.outerHeight(true) - days[i].$day.height();
            var h_ = parseInt(days[i].$day.parent().height() - h_d) + 'px';
            days[i].$day.css('height', h_);
        }
        this.$header_wdays.empty();
        for (var i=0; i<7; i++) {
            var $wday = $('<div class=""></div>');
            $wday.html(this.l10n_wdays[i]);
            $wday.css('width', w_);
            this.$header_wdays.append($wday);
        }
        this.$lines_wrap.show();

        if (opts.draw_after)
            opts.draw_after(days);
    }

    proto._draw_linediv = function() {
        var $newline = $('<div class="'+this.class_prefix+'line"></div>');
        this.$lines_wrap.append($newline);
        var this_ = this;
        setTimeout(function() {
            var w_d = $newline.outerWidth(true) - $newline.width();
            $newline.css('width', (this_.$divwrapper.width()-w_d)+'px');
            var h_d = $newline.outerHeight(true) - $newline.height();
            $newline.css('height', (parseInt(this_.$divwrapper.height()/6)-h_d)+'px');
        }, 0);
        return $newline;
    } 

    proto._draw_day = function($line, day) {
        var $newday = $('<div class="'+this.class_prefix+'day"></div>');
        this.draw_day($newday, day);
        $line.append($newday);
        return $newday;
    }

    proto.draw_day = function($daydiv, day) {
        $daydiv.html(day.getDate());
        // If current day:
        if (day.getFullYear() == this.now_date.getFullYear() && day.getMonth() === this.now_date.getMonth() && day.getDate() == this.now_date.getDate())
            $daydiv.addClass(this.class_prefix+'currentday');

        if (day.getMonth() === this.selected_date.getMonth())
            $daydiv.addClass(this.class_prefix+'currentmonth');

        // cal calback, if defined:
        if (opts.draw_day)
            opts.draw_day($daydiv, day);
    }

    return new baseClass;
}

