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

let scrollSearch = document.querySelector('.search').scrollY;
let scrollBoard = document.querySelector('.board').scrollY;
let scrollMedia = document.querySelector('.media').scrollY;
let scrollGoals = document.querySelector('.goals').scrollY;
let scrollCustomer = document.querySelector('.customer').scrollY;

// 1. Make location change with scroll position.



let currentScroll = scrollY/document.documentElement.scrollHeight;


window.addEventListener('scroll', function(){
    
});


// 2. Allow Navigation with scroll locationList.
const selecting = (item, index) => {
    topList[index].addEventListener('click', function(){console.log("hi");})};
// };

// topList.forEach(selecting);







// 3. Sticky header for board selection.

const here = document.querySelector('.here');
const hid = document.querySelector('.hid');
const boardLocal = document.querySelector('.board-local');
const boardNew = document.querySelector('.board-new');
const boardDeals = document.querySelector('.board-deals');




// 4. Highlight current board tab.

let tab = document.querySelectorAll('.tab');

// Get rid of all pink backgrounds, then add it to the clicked one.
for(let i=0; i < tab.length; i++) {
    tab[i].addEventListener('click', active) 
}

function active(ev){
    tab.className.remove('bg-active');
    ev.target.classList.add('bg-active');
}
// 5. MAYBE Carousel for surfing videos.