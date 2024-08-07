let eventsContainer = document.querySelector('#Events .eventsSwiper .swiper-wrapper');

eventsData.forEach(data => {
	const { title, image, date, venue, registerLink } = data;
	eventsContainer.innerHTML += eventsTemplate(title, image, date, venue, registerLink);
});

var eventsSwiper = new Swiper(".eventsSwiper", {
	effect: "cards",
	grabCursor: true,
	perSlideOffset: 320,
	rotate: true
});

// For teams Swiper

let teamContainer = document.querySelector('#Team .swiper-wrapper');
team.forEach(data => {
	const { fullName, image, post, about } = data;
	teamContainer.innerHTML += teamTemplate(fullName, image, post, about);
});


// const progressCircle = document.querySelector(".autoplay-progress svg");
// const progressContent = document.querySelector(".autoplay-progress span");

var teamsSwiper = new Swiper(".teamsSwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}
});


let gallerySwiper2 = document.querySelector(".gallerySwiper2 .swiper-wrapper");
galleryData.forEach(url => {
	gallerySwiper2.innerHTML += galleryTemplate(url);
});



// For gallery
var gallery = new Swiper(".gallerySwiper2", {
	loop: true,
	slidesPerView: 3,
	spaceBetween: 10,
	navigation: {
		nextEl: ".gallery-next",
		prevEl: ".gallery-prev",
	},
	thumbs: {
		swiper: gallery,
	},
});


// For home page

let homeContainer = document.querySelector('#Home .homeSwiper .swiper-wrapper');
imageFiles.forEach(url => {
	console.log(homeContainer)
	homeContainer.innerHTML += imageTemplate(url)
});


const homeprogressCircle = document.querySelector(".autoplay-progress svg");
const homeprogressContent = document.querySelector(".autoplay-progress span");

var swiper5 = new Swiper(".homeSwiper", {
	spaceBetween: 30,
	centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	on: {
		autoplayTimeLeft(s, time, progress) {
			homeprogressCircle.style.setProperty("--progress", 1 - progress);
			homeprogressContent.textContent = `${Math.ceil(time / 1000)}s`;
		}
	}
});