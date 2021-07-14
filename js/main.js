
// animation onscroll

const animeItems = $('.animate-item');

if (animeItems.length > 0) {
    $(window).on('scroll', function () {

        for (let index = 0; index < animeItems.length; index++) {
            const animeItem = animeItems[index];
            const animeItemsHeight = animeItem.offsetHeight;
            const animeItemsOffset = offset(animeItem).top;
            let animeStart;

            if ($(animeItem).hasClass('animate-footer')) {
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

//animation on hover for plus


$(document).ready(function () {
    var plusItems = $('.plus-hover');
    var popaps = $('.popup-item');
  
    for (let i = 0; i < plusItems.length; i++) {
        var plusElement = plusItems[i];
        
        $(plusElement).on("click", function () {
             var plus = $(this).data('plus');
             var el = $(this);
             var pos2 = $(el)[0].getBoundingClientRect();
             var posX = pos2.top - 35;
             var posY = pos2.left - 382;
              
             for(let i = 0; i < popaps.length; i++) {
                var popupElement = popaps[i];
                var popup = $(popupElement).data('popup');

                if(popup === plus) {
                    $(popupElement).toggleClass('open');
                    $(popupElement).css('top', posX).css('left', posY);
                    $(el).toggleClass('st2-off');
                }
            }  
        });
    };
});

//animation footer

$(document).ready(function () {
    var plusItems = $('.menu-left-item');
    var popaps = $('.popup-item');
  
    for (let i = 0; i < plusItems.length; i++) {
        var plusElement = plusItems[i];
        
        $(plusElement).on("click", function () {
             var plus = $(this).data('plus');
             var el = $(this);
             var pos2 = $(el)[0].getBoundingClientRect();
             var posX = pos2.top - 35;
             var posY = pos2.left - 382;
              
             for(let i = 0; i < popaps.length; i++) {
                var popupElement = popaps[i];
                var popup = $(popupElement).data('popup');

                if(popup === plus) {
                    $(popupElement).toggleClass('open');
                    $(popupElement).css('top', posX).css('left', posY);
                    $(el).toggleClass('st2-off');
                }
            }  
        });
    };
});

// animation banner


$(document).ready(function() {

      $("ul.menu-left").on("click", "li:not(.active)", function() {
        var fdf = this;  
        $(this).addClass("item-active").siblings().removeClass("item-active");
        
        var el = $('.item-active > a').data('id');
        var image = $('.slide');
        $(".slide").removeClass("active-slide");
        $('.slide[data-img=' + el + ']').addClass('active-slide');
    
        
        });  
    });





