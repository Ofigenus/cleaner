
const animeItems = document.querySelectorAll('.animate-item');

if (animeItems.length > 0) {
    window.addEventListener('scroll', onScrollAnim);
    function onScrollAnim() {
        const animeItems = document.querySelectorAll('.animate-item');
        for (let index = 0; index < animeItems.length; index++) {
            const animeItem = animeItems[index];
            const animeItemsHeight = animeItem.offsetHeight;
            const animeItemsOffset = offset(animeItem).top;
            const animeStart = 4;

            let animeTamePoint = window.innerHeight - animeItemsHeight / animeStart;
            if (animeItemsHeight > window.innerHeight) {
                animeTamePoint = window.innerHeight - window.innerHeight / animeStart;
            }
            if ((pageYOffset > animeItemsOffset - animeTamePoint) && pageYOffset < (animeItemsOffset + animeItemsHeight)) {
                animeItem.classList.add('active');
            }else {
                if (!animeItems.classList.contains('anime-none')) {
                    animeItem.classList.remove('active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    onScrollAnim();
}