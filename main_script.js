// PopUp settings
$('.call__button').click(function () {
    $('.popup-overlay').addClass('active')
})

$('.popup__close').click(function () {
    $('.popup-overlay').removeClass('active')
})


// Slider settinngs
var currentSlide = 1
var rightButton = $('.slider__item_arrow-right')
var leftButton = $('.slider__item_arrow-left')
var sliderTrack = $('.slider__track')
var sliderItem = $('.slider__item_content')


rightButton.click(function () {
    currentSlide = currentSlide + 1
    
    if (currentSlide <= sliderItem.length) {
        sliderTrack.css({
            transition: '.7s',
            marginLeft: '-=' + sliderItem.width() + 'px',
        })
        sliderItem.fadeOut(100)
        sliderItem.fadeIn(500)
    }
    else {
        sliderTrack.css({
            transition: '0.7s',
            marginLeft: '+=' + sliderItem.width() * 2 + 'px',
        })
        currentSlide = 1
    }

})

leftButton.click(function () {
    currentSlide = currentSlide - 1

    if (currentSlide >= 1) {
        sliderTrack.css({
            transition: '.7s',
            marginLeft: '+=' + sliderItem.width() + 'px',
        })
        sliderItem.fadeOut(100)
        sliderItem.fadeIn(500)
    }
    else {
        sliderTrack.css({
            transition: '.7s',
            marginLeft:'-='+ sliderItem.width()*2 + 'px',
        })
        currentSlide = 3
    }
})

rightButton.click(function(){
    if(currentSlide == 1){
        $('.slider__pagination .pagination__dot').removeClass('pagination__dot-active')
        $('.slider__pagination .pagination__dot:nth-child(1)').addClass('pagination__dot-active')
    }
    else if (currentSlide == 2) {
        $('.slider__pagination .pagination__dot').removeClass('pagination__dot-active')
        $('.slider__pagination .pagination__dot:nth-child(2)').addClass('pagination__dot-active')
    }
    else if (currentSlide == 3) {
        $('.slider__pagination .pagination__dot').removeClass('pagination__dot-active')
        $('.slider__pagination .pagination__dot:nth-child(3)').addClass('pagination__dot-active')
    }
})

leftButton.click(function(){
    if(currentSlide == 1){
        $('.slider__pagination .pagination__dot').removeClass('pagination__dot-active')
        $('.slider__pagination .pagination__dot:nth-child(1)').addClass('pagination__dot-active')
    }
    else if (currentSlide == 2) {
        $('.slider__pagination .pagination__dot').removeClass('pagination__dot-active')
        $('.slider__pagination .pagination__dot:nth-child(2)').addClass('pagination__dot-active')
    }
    else if (currentSlide == 3) {
        $('.slider__pagination .pagination__dot').removeClass('pagination__dot-active')
        $('.slider__pagination .pagination__dot:nth-child(3)').addClass('pagination__dot-active')
    }
})


