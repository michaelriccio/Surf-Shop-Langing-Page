// Table of Contents
// 1. Make location change with scroll position.
// 2. Allow Navigation with scroll locationList.
// 3. Sticky header for board selection.
// 4. Highlight current board tab.
// 5. MAYBE Carousel for surfing videos.

const locationList = document.querySelector('.location-list');
const s = document.querySelector('.s');
const b = document.querySelector('.b');
const m = document.querySelector('.m');
const g = document.querySelector('.g');
const c = document.querySelector('.c');
const topList = document.querySelectorAll('li.top-list');

let search = document.querySelector('.search');
let board = document.querySelector('.board');
let media = document.querySelector('.media');
let goals = document.querySelector('.goals');
let customer = document.querySelector('.customer');


// 1. Make location change with scroll position.


//watching you scroll
window.addEventListener('scroll',currentLocation);

//sensing the distance from the top of body, finding the height of the whole doc, updating bar width
function currentLocation() {
    let currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let percentScrolled = (currentScroll / height) * 100;
    let progressBar = document.querySelector('#progress-bar');
    progressBar.style.cssText = 'width:' + percentScrolled + '%;';

    //creating scroll positions for each main.article
    let currentSeach = search.scrollTop;
    let currentBoard = board.scrollTop;
    let currentMedia = media.scrollTop;
    let currentGoals = goals.scrollTop;
    let currentCustomer = customer.scrollTop;

    //comparing them to the currentScroll
    if (currentSeach >= currentScroll > currentBoard) {locationList.style.cssText = 'transform: translateY(0);';}
    else if (currentBoard >= currentScroll > currentMedia) {locationList.style.cssText = 'transform: translateY(2em);';}
    else if (currentMedia >= currentScroll > currentGoals) {locationList.style.cssText = 'transform: translateY(4em);';}
    else if (currentGoals >= currentScroll > currentCustomer) {locationList.style.cssText = 'transform: translateY(6em);';}
    else if (currentCustomer >= currentScroll) {locationList.style.cssText = 'transform: translateY(8em);';}
    
    //*you need to figure out why this comes back and undefined even when defined globally
    //*distance = window.pageYOffset + scrollBoard.getBoundingClientRect().top;
}
//*let distance;

// 2. Allow Navigation with scroll locationList.

const selecting = (item, index) => {
    topList[index].addEventListener('click', function(){console.log("hi");})
};

topList.forEach(selecting);







// 3. Sticky header for board selection.

const here = document.querySelector('.here');
const hid = document.querySelector('.hid');
const boardLocal = document.querySelector('.board-local');
const boardNew = document.querySelector('.board-new');
const boardDeals = document.querySelector('.board-deals');




// 4. Highlight current board tab.

const tab = document.querySelectorAll('.tab');

// Get rid of all pink backgrounds, then add it to the clicked one.
for(let i=0; i < tab.length; i++) {
    tab[i].addEventListener('click', active) 
}

function active(ev){
    tab.className.remove('bg-active');
    ev.target.classList.add('bg-active');
}





// 5. MAYBE Carousel for surfing videos.