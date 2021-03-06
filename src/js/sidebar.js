// Open-Close Files


// var aboutButton = document.querySelector("#files li:nth-child(2)");
var eventsButton = document.querySelector("#files li:nth-child(4)");

// aboutButton.addEventListener('click', openCloseFiles('about'));
eventsButton.addEventListener('click', openCloseFiles('events'));

function openCloseFiles(target) {
	return function() {
		var triDiv = document.querySelector("#" + target + "Triangle");
		var level2 = document.querySelectorAll(".level2." + target);
		if (triDiv.classList.contains('closed')) {
			triDiv.classList.remove('closed');
			triDiv.classList.add('open');
			for (var i = 0; i < level2.length; i++) {
				level2[i].classList.remove("nodisplay");
			}
		}
		else {
			triDiv.classList.remove('open');
			triDiv.classList.add('closed');
			for (var i = 0; i < level2.length; i++) {
				level2[i].classList.add("nodisplay");
			}
		}
	};
};

// Open-Close Tabs
var buttons = document.querySelectorAll(".subject");
var buttonsTexts = document.querySelectorAll(".subject p");
for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', openCloseTabs(i));
}
function openCloseTabs(i) {
	return function () {
		var target = buttonsTexts[i].innerHTML;
		var triDiv = document.querySelector("#" + target + "Triangle");
		var container = document.querySelector("#" + target);
		if (triDiv.classList.contains('closed')) {
			triDiv.classList.remove('closed');
			triDiv.classList.add('open');
			container.classList.remove("nodisplay");
		}
		else {
			triDiv.classList.remove('open');
			triDiv.classList.add('closed');
			container.classList.add("nodisplay");
		}
	}
}

// Countdown
function countdown () {

	var end = new Date('08/18/2018 9:0 AM');

	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;
	var timer;

	var daysElement = document.querySelector('.days p');
	var hoursElement = document.querySelector('.hours p');
	var minutesElement = document.querySelector('.minutes p');
	var secondsElement = document.querySelector('.seconds p');

	function showRemaining() {
		var now = new Date();
		var distance = end - now;
		if (distance < 0) {

			clearInterval(timer);

			return;
		}
		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);

		days < 10 ? daysElement.innerHTML = "0" + days : daysElement.innerHTML = days;
		hours < 10 ? hoursElement.innerHTML = "0" + hours : hoursElement.innerHTML = hours;
		minutes < 10 ? minutesElement.innerHTML = "0" + minutes : minutesElement.innerHTML = minutes;
		seconds < 10 ? secondsElement.innerHTML = "0" + seconds : secondsElement.innerHTML = seconds;
	}

	timer = setInterval(showRemaining, 1000);

}
countdown();


// Open-Close Sidebar
var html = document.documentElement;
var sidebar = document.querySelector('section.sidebar');
var mainEl = document.querySelector('section.main');
var uiContainer = document.querySelector('#ui-view');
var hamburger = document.querySelector('#hamburger');
var cross = document.querySelector('#cross');
var isMobile = getComputedStyle(html).maxWidth === '800px' ? true : false;

if (isMobile) {
	sidebar.classList.remove('open');
	sidebar.classList.add('closed');
	mainEl.style.marginLeft = '50px';
	hamburger.classList.remove('nodisplay');
	cross.classList.add('nodisplay');
}

function sidebarOpen() {
	if (sidebar.classList.contains('closed')) {
		sidebar.classList.remove('closed');
		sidebar.classList.add('open');
		mainEl.style.marginLeft = '250px';
		hamburger.classList.add('nodisplay');
		cross.classList.remove('nodisplay');
		if (isMobile) {
			mainEl.style.marginLeft = '0px';
			mainEl.style.left = '250px';
		}
	}
}

function sidebarClose() {
	if (sidebar.classList.contains('open')) {
		sidebar.classList.remove('open');
		sidebar.classList.add('closed');
		mainEl.style.marginLeft = '50px';
		hamburger.classList.remove('nodisplay');
		cross.classList.add('nodisplay');
		if (isMobile) {
			mainEl.style.marginLeft = '50px';
			mainEl.style.left = '0px';
		}
	}
}

hamburger.addEventListener('click', sidebarOpen);
cross.addEventListener('click', sidebarClose);