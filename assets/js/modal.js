function mw_close() {
    $('.modal-window').fadeOut().end().find('.window-container').removeClass('visible');
    event.stopPropagation()
}

