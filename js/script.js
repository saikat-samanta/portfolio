//jshint esversion: 9
window.addEventListener('load', () => {
    document.querySelector('.loadingio-spinner-reload-g09deovx6dd').setAttribute(`style`, `display: none;`);
});

function videoPause() {
    document.querySelectorAll('video').forEach(el => {
        el.pause();
    });
}

function nextPage(page) {
    const zIndex = {
        page_1: 1,
        page_2: 2,
        page_3: 3
    };
    console.log(zIndex[page]);
    document.querySelector(`.${page}`).classList.add('turn');
    document.querySelector(`.${page}`).setAttribute('style', `z-index: ${zIndex[page]}`);
    videoPause();
}


function prevPage(page) {
    console.log(`this is prev ${page}`);
    document.querySelector(`.${page}`).classList.remove('turn');
    setTimeout(() => document.querySelector(`.${page}`).setAttribute('style', `z-index: unset`), 600);
    videoPause();
}


function closeBook() {
    for( let i = 3; i>=1; i--){
        setTimeout(() => {
            prevPage(`page_${i}`);
        }, 900/i);
    }
}

function checkMediaQuery() {
    if (window.innerWidth < 630) {
        document.querySelector('body').style.display = "none";
        alert('Display size < 640px. Please rotate your device');
    } else {
        document.querySelector('body').style.display = "flex";
    }
}
window.addEventListener('resize', checkMediaQuery);
      