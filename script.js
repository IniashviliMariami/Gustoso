

$(document).ready(function () {
    var carouselWidth = $('.carousel-inner')[0].scrollWidth; 
    var imgWidth = $('.carousel-item').outerWidth(true); 
    var scrollPosition = 0;

    
    $('.carousel-control-next').on('click', function () {
        if (scrollPosition < (carouselWidth - (imgWidth * 3))) { 
            scrollPosition += imgWidth;
            $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600); 
            console.log('next'); 
        }
    });

    
    $('.carousel-control-prev').on('click', function () {
        if (scrollPosition > 0) {
            scrollPosition -= imgWidth;
            $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600); 
            console.log('prev'); 
        }
    });
});



