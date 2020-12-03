//jshint esversion: 9
window.addEventListener('load', () => {
    document.querySelector('.loadingio-spinner-reload-g09deovx6dd').setAttribute(`style`, `display: none;`);
    checkMediaQuery();
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
    document.querySelector(`.${page}`).classList.add('turn');
    document.querySelector(`.${page}`).setAttribute('style', `z-index: ${zIndex[page]}`);
    videoPause();
}


function prevPage(page) {
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
    if(navigator.userAgent.includes('Linux') || navigator.userAgent.includes('iPhone')){
        if (window.innerWidth < 640) {
            document.querySelector('body').style.display = "none";
            alert('Please rotate your device');
        } else {
            document.querySelector('body').style.display = "flex";
        }
    }else {
        if (window.innerWidth < 640) {
            document.querySelector('body').style.display = "none";
            alert('Display size < 640px. please use larger display');
        } else {
            document.querySelector('body').style.display = "flex";
        }
    }
}
window.addEventListener('resize', checkMediaQuery);
      