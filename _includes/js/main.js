$(function() {
    $('h1').each(function(index, el) {
        el = $(el);
        el.html(el.text().replace('♥', '<span class="heart">♥</span>'));
    });
});
