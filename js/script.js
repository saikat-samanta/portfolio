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
    if (navigator.userAgent.includes('Linux') || navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('Windows Phone')) {
        if (window.innerWidth < 640) {
            console.log(window.innerWidth, window.innerHeight);
            document.querySelector('body').style.display = "none";
            if (window.innerHeight > 562) {
                alert('Please rotate your device');
            }
        } else {
            console.log(window.innerWidth, window.innerHeight);
            if (window.innerHeight < 360) {
                document.querySelector('body').style.display = "none";
                alert('Browser is not supported width match');
            } else {
                document.querySelector('body').style.display = "flex";
            }
        }
    } else {
        if (window.innerWidth < 950 || window.innerHeight < 651) {
            document.querySelector('body').style.display = "none";
            alert('Please use larger display or Full screen');
        } else {
            document.querySelector('body').style.display = "flex";
        }
    }
}
window.addEventListener('resize', checkMediaQuery);
      
