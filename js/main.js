$(function () {
    history.scrollRestoration = "manual";

    $('.mainlivenewcj').addClass('on');





    $(window).on('scroll', function () {
        // $.smoothScroll();

        var scrValue = $(window).scrollTop();
        console.log(scrValue)


        if (scrValue < 800 && scrValue > 600) {
            $('.header').addClass('on')


            // $(window).on('wheel', function (event) {
            //     console.log(event.originalEvent.deltaY)
            //     var wdY = event.originalEvent.deltaY;
            //     if (wdY > 0) {
            //         $('.header').addClass('tt').removeClass('ff')
            //     }
            //     else {
            //         $('.header').addClass('ff').removeClass('tt')
            //     }
            // })


        }
        else {
            $('.header').removeClass('on')
        }

    })





    // $(window).on('wheel', function (event) {
    //     console.log(event.originalEvent.deltaY)
    //     var wdY = event.originalEvent.deltaY;
    //     if (wdY < 0) {
    //         $('.header').removeClass('ox')
    //     }
    //     else {
    //         $('.header').addClass('ox')
    //     }
    // })


})