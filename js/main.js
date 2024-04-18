document.addEventListener('DOMContentLoaded', function(){

    var mixer = mixitup('.posts__list');

    $('.posts__filter-item').on('click', function () {
        $('.posts__filter-item').removeClass('posts__filter-item--active')
        $(this).addClass('posts__filter-item--active')
    })

});