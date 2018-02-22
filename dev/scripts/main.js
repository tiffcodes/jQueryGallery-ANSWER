$(function() {
    console.log('ready');
});

$('ul img').on('click', function() {
    const src = $(this).attr('data-main');
    console.log(src);
    $('img#main').attr('src', src);
});