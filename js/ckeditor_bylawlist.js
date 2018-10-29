(function ($) {
    /**
     * Updates all list starting points.
     *
     * @param {object} obj the list object.
     */
    function updateList(obj) {
        $(obj).find('li').first().css('counter-reset', 'bylawlist-counter ' + ($(obj).attr('start') - 1));
    }

    $(document).ready(function() {
        $('ol[start]').each(function(index, obj) {
            updateList(obj);
        });
    });
}(jQuery));