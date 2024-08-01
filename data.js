
let eventsData = [
    {
        title: 'National Story Writing Competition',
        image: '/assets/images/storyWriting.jpg',
        date: 'Feb 30, 2024',
        venue: `St. Xavier's College, Maitighar`,
        registerLink: ''
    },
    {
        title: 'National Story Writing Competition',
        image: '/assets/images/storyWriting.jpg',
        date: 'Feb 30, 2024',
        venue: `St. Xavier's College, Maitighar`,
        registerLink: ''
    },
    {
        title: 'National Story Writing Competition',
        image: '/assets/images/storyWriting.jpg',
        date: 'Feb 30, 2024',
        venue: `St. Xavier's College, Maitighar`,
        registerLink: ''
    },
    {
        title: 'National Story Writing Competition',
        image: '/assets/images/storyWriting.jpg',
        date: 'Feb 30, 2024',
        venue: `St. Xavier's College, Maitighar`,
        registerLink: ''
    }
]

let eventsTemplate = (title, image, date, venue, registerLink) => `
    <div class="swiper-slide rounded-3xl bg-lightBg text-white text-xl p-4">
					<h1 class="font-extrabold text-center">${title}</h1>
					<img src="${image}" alt="Story writing" class="rounded-md my-3">
					<p class="text-lg"><span class="font-extrabold text-2xl">Date:</span>${date}</p>
					<p class="text-lg"><span class="font-extrabold text-2xl">Venue:</span>${venue}</p>
					<button
						class="w-full h-12 bg-[#f1f2f6] text-darkBg text-3xl font-extrabold cursor-pointer rounded-md my-4">
						Register</button>
				</div>
`

let team = [
    {
        fullName: 'Johnny Harris',
        image: '/assets/images/storyWriting.jpg',
        post: 'President',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates culpa! Totam sapiente rerum veritatis, quod consectetur aliquid aut voluptatem quasi odio ipsum!'
    },
    {
        fullName: 'Johnny Harris',
        image: '/assets/images/storyWriting.jpg',
        post: 'Vice President',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates culpa! Totam sapiente rerum veritatis, quod consectetur aliquid aut voluptatem quasi odio ipsum!'
    },
    {
        fullName: 'Johnny Harris',
        image: '/assets/images/storyWriting.jpg',
        post: 'IT Head',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates culpa! Totam sapiente rerum veritatis, quod consectetur aliquid aut voluptatem quasi odio ipsum!'
    },
    {
        fullName: 'Johnny Harris',
        image: '/assets/images/storyWriting.jpg',
        post: 'Events Manager',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates culpa! Totam sapiente rerum veritatis, quod consectetur aliquid aut voluptatem quasi odio ipsum!'
    },
    {
        fullName: 'Johnny Harris',
        image: '/assets/images/storyWriting.jpg',
        post: 'Social Media Manager',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates culpa! Totam sapiente rerum veritatis, quod consectetur aliquid aut voluptatem quasi odio ipsum!'
    },
]

let teamTemplate = (fullName, image, post, about) => `
			<div class="swiper-slide bg-lightBg">
                <div class="flex flex-col items-center justify-center py-5">
					<img src="${image}"
						class="w-64 rounded-xl my-3" alt="harry">
					<h1 class="text-white font-bold text-3xl px-3">${fullName}</h1>
					<h1 class="text-white font-bold text-xl px-3 italic">${post}</h1>
					<p class="text-lg text-white px-4 text-center">${about}</p>
				</div>
			</div>

`


