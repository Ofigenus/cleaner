// animation onscroll

const animeItems = document.querySelectorAll('.animate-item');

if (animeItems.length > 0) {

    window.addEventListener('scroll', onScrollAnim);

    function onScrollAnim() {
        const animeItems = document.querySelectorAll('.animate-item');
        for (let index = 0; index < animeItems.length; index++) {
            const animeItem = animeItems[index];
            const animeItemsHeight = animeItem.offsetHeight;
            const animeItemsOffset = offset(animeItem).top;
            const animeStart = 3;
            const animeStartFooter = 1;

            if (animeItem.classList.contains('animate-footer')) {
                let animeTamePoint = window.innerHeight - animeItemsHeight / animeStartFooter;
                if (animeItemsHeight > window.innerHeight) {
                    animeTamePoint = window.innerHeight - window.innerHeight / animeStartFooter;
                }
                if ((pageYOffset > animeItemsOffset - animeTamePoint) && pageYOffset < (animeItemsOffset + animeItemsHeight)) {
                    animeItem.classList.add('active-anim');
                } else {
                    if (!animeItem.classList.contains('no-anim')){
                    animeItem.classList.remove('active-anim');
                    }
                }  
            }

            if (!animeItem.classList.contains('animate-footer')) {
            let animeTamePoint = window.innerHeight - animeItemsHeight / animeStart;
            if (animeItemsHeight > window.innerHeight) {
                animeTamePoint = window.innerHeight - window.innerHeight / animeStart;
            }
            if ((pageYOffset > animeItemsOffset - animeTamePoint) && pageYOffset < (animeItemsOffset + animeItemsHeight)) {
                animeItem.classList.add('active-anim');
            } else {
                if (!animeItem.classList.contains('no-anim')){
                animeItem.classList.remove('active-anim');
                }
            }
        }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft
        }
    }
    onScrollAnim();
};




//header menu fixed

var div = document.getElementById('header-fix');
window.onscroll = function () {
    if (window.pageYOffset > 95) {
        div.classList.add('toolbar');
    } else if (window.pageYOffset < 95) {
        div.classList.remove('toolbar');
    }
};

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