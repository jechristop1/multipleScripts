(function(){

// Navigation script

var button = document.getElementById('menuButton');
var menuLinks = document.getElementById('showLinks');
var width = window.innerWidth;
button.addEventListener('click', showHide);




function showHide(){
	if(menuLinks.classList.contains('hideLinks')){
		menuLinks.classList.remove('hideLinks');
		menuLinks.classList.add('showLinks');		
	} else if(menuLinks.classList.contains('showLinks')){
		menuLinks.classList.remove('showLinks');
		menuLinks.classList.add('hideLinks');		
	}
};

})();

// Slide Javascript


(function(){

var counter = 0, items, next, prev, numItems;
	next = document.querySelector('.next');
	prev = document.querySelector('.prev');
	items = document.querySelectorAll('.slideshow figure');
	numItems = items.length;

function showCurrent(){
	var itemsToShow = Math.abs(counter % numItems);
	for(var i = 0; i < numItems; i++){
		items[i].classList.remove('show');
	}
	items[itemsToShow].classList.add('show');
};


next.addEventListener('click', function(){
	counter++;
	showCurrent();	
});

prev.addEventListener('click', function(){
	counter--;
	showCurrent();
});


})();


(function(){

// Modal Javascript

var open = document.getElementById('openModal');
var overlay = document.getElementById('overlay');
var close = document.getElementById('closeModal');
function showOrHide(){
	overlay.classList.toggle('hide');
};
open.addEventListener('click', showOrHide);
close.addEventListener('click', showOrHide);

})();