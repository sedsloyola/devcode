let eventsContainer = document.querySelector('#Events .eventsSwiper .swiper-wrapper');
		eventsData.forEach(data => {
			const { title, image, date, venue, registerLink } = data;
			eventsContainer.innerHTML += eventsTemplate(title, image, date, venue, registerLink);
		});

		var swiper = new Swiper(".eventsSwiper", {
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


		const progressCircle = document.querySelector(".autoplay-progress svg");
		const progressContent = document.querySelector(".autoplay-progress span");
		var swiper = new Swiper(".teamsSwiper", {
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
			},
			on: {
				autoplayTimeLeft(s, time, progress) {
					progressCircle.style.setProperty("--progress", 1 - progress);
					progressContent.textContent = `${Math.ceil(time / 1000)}s`;
				}
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
        swiper: swiper,
      },
    });