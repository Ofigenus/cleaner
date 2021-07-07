'use strict'
// animation onscroll

const animeItems = $('.animate-item');

if (animeItems.length > 0) {
    $(window).on('scroll', function () { 

        for (let index = 0; index < animeItems.length; index++) {
            const animeItem = animeItems[index];
            const animeItemsHeight = animeItem.offsetHeight;
            const animeItemsOffset = offset(animeItem).top;
            let animeStart;

            if($(animeItem).hasClass('animate-footer')){
                animeStart = 1.01;
            } else {
                animeStart = 4;
            };
           
                let animeTamePoint = window.innerHeight - animeItemsHeight / animeStart;
                if (animeItemsHeight > window.innerHeight) {
                    animeTamePoint = window.innerHeight - window.innerHeight / animeStart;
                }
                if ((pageYOffset > animeItemsOffset - animeTamePoint) && pageYOffset < (animeItemsOffset + animeItemsHeight)) {
                    animeItem.classList.add('active-anim');
                } else {
                    if (!animeItem.classList.contains('no-anim')) {
                        animeItem.classList.remove('active-anim');
                    }
                } 
        }
    });
    
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    } 
};

//header menu fixed


$(window).on('scroll', function () { 
    let div = $('#header-fix');
    if (window.pageYOffset > 95) {
        div.addClass('toolbar');
    }
    if (window.pageYOffset < 95 || $('#how-we-clean').hasClass('animate-footer') && $('#how-we-clean').hasClass('active-anim')) {
        div.removeClass('toolbar');
    }

});


// btn order

let way = 100,
    deg = 10;

$(window).on('scroll', function () {

    let s = $(this).scrollTop();
    $('.rotate-icon').css('transform', 'rotate(' + (s / way * deg) + 'deg)');


    if (s > 10) {

        $(".btn-container").addClass('btn-scale');

        $('.rotate-icon').hover(
            function () {
                $(this).removeClass('btn-scale');
            },
            function () {
                $(this).addClass('btn-scale');
            });
    };

    if (s < 100) {
        $('.rotate-icon').hover(
            function () {
                $(this).removeClass('btn-scale');
            });
    }

    if (s == 0) {
        $('.rotate-icon').css('transform', 'rotate(-15deg)').removeClass('btn-scale');
    }

    if ($('#how-we-clean').hasClass('animate-footer') && $('#how-we-clean').hasClass('active-anim')) {
        $('#btn-order-clean').css('transform', 'scale(0)');
     } else {
         $('#btn-order-clean').css('transform', 'scale(1)');
     }

});



// $('.st3').hover(function () {
//     let plus = $('.st2');
//     for (let index = 0; index < plus.length; index++) {
//         let animePlus = plus[index];
    
//         $(animePlus).toggleClass('st2-hover');
// console.log(animePlus);
//     }
// });