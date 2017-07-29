
jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.c-back-to-top').fadeIn(duration);
        } else {
            jQuery('.c-back-to-top').fadeOut(duration);
        }
    });

    jQuery('.c-back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    });
});
