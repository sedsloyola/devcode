
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
        fullName: 'Shriyukta Aryal',
        image: '../assets/images/storyWriting.jpg',
        post: 'President',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates culpa! Totam sapiente rerum veritatis, quod consectetur aliquid aut voluptatem quasi odio ipsum!'
    },
    {
        fullName: 'Prashansa Thapa',
        image: '../assets/images/storyWriting.jpg',
        post: 'Vice President',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates culpa! Totam sapiente rerum veritatis, quod consectetur aliquid aut voluptatem quasi odio ipsum!'
    },
    {
        fullName: 'Aashriya Paudel',
        image: '/assets/images/storyWriting.jpg',
        post: 'Secretary',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates culpa! Totam sapiente rerum veritatis, quod consectetur aliquid aut voluptatem quasi odio ipsum!'
    },
    {
        fullName: 'Swarnim Shrestha',
        image: '/assets/images/storyWriting.jpg',
        post: 'National Outreach Manager',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates culpa! Totam sapiente rerum veritatis, quod consectetur aliquid aut voluptatem quasi odio ipsum!'
    },
    {
        fullName: 'Samip Aryal',
        image: '/assets/images/storyWriting.jpg',
        post: 'Treasurer',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates culpa! Totam sapiente rerum veritatis, quod consectetur aliquid aut voluptatem quasi odio ipsum!'
    },
    {
        fullName: 'Asim Koirala',
        image: '/assets/images/storyWriting.jpg',
        post: 'Social Media Manager',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates culpa! Totam sapiente rerum veritatis, quod consectetur aliquid aut voluptatem quasi odio ipsum!'
    },
    {
        fullName: 'Drishya Puri',
        image: '/assets/images/storyWriting.jpg',
        post: 'Social Media Manager',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates culpa! Totam sapiente rerum veritatis, quod consectetur aliquid aut voluptatem quasi odio ipsum!'
    },
    {
        fullName: 'Aayushma Panth',
        image: '/assets/images/storyWriting.jpg',
        post: 'Event Manager',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates culpa! Totam sapiente rerum veritatis, quod consectetur aliquid aut voluptatem quasi odio ipsum!'
    },
    {
        fullName: 'Pawan Paudel',
        image: '/assets/images/storyWriting.jpg',
        post: 'Event Manager',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates culpa! Totam sapiente rerum veritatis, quod consectetur aliquid aut voluptatem quasi odio ipsum!'
    },
    {
        fullName: 'Aaryan Bastakoti',
        image: '/assets/images/storyWriting.jpg',
        post: 'Academic Journal Manager',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates culpa! Totam sapiente rerum veritatis, quod consectetur aliquid aut voluptatem quasi odio ipsum!'
    },
    {
        fullName: 'Rubika Lohani',
        image: '/assets/images/storyWriting.jpg',
        post: 'Academic Journal Manager',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates culpa! Totam sapiente rerum veritatis, quod consectetur aliquid aut voluptatem quasi odio ipsum!'
    },
    {
        fullName: 'Shreyas Manandhar',
        image: '../assets/images/storyWriting.jpg',
        post: 'UI/UX Designer & IT Head',
        about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptates culpa! Totam sapiente rerum veritatis, quod consectetur aliquid aut voluptatem quasi odio ipsum!'
    },
]

let teamTemplate = (fullName, image, post, about) => `
			<div class="swiper-slide rounded-xl">
                <div class="flex flex-col items-center justify-center py-5">
					<img src="${image}" class="w-72 teamsImageExpand:w-[500px] rounded-xl my-3" alt="harry">
					<h1 class="text-darkBg font-bold text-3xl px-3">${fullName}</h1>
					<h1 class="text-darkBg font-bold text-xl px-3 italic">${post}</h1>
					<p class="text-lg text-darkBg px-4 text-center">${about}</p>
				</div>
			</div>

`

let galleryFolderPath = "../assets/images/gallery/";
let galleryData = [
    galleryFolderPath + "001.jpg",
    galleryFolderPath + "002.jpg",
    galleryFolderPath + "003.jpg",
    galleryFolderPath + "004.jpg",
    galleryFolderPath + "005.jpg",
    galleryFolderPath + "006.jpg",
    galleryFolderPath + "007.jpg",
    galleryFolderPath + "008.jpg",
    galleryFolderPath + "009.jpg",
    galleryFolderPath + "010.jpg",
    galleryFolderPath + "011.jpg",
    galleryFolderPath + "012.jpg",
    galleryFolderPath + "013.jpg",
    galleryFolderPath + "014.jpg",
    galleryFolderPath + "015.jpg",
];

// let galleryData = [
//     "/assets/images/gallery/001.jpg",
// ]


let galleryTemplate = (url)=>
    `
<div class="swiper-slide ">
			<img src="${url}" class="rounded-lg" />
		  </div>

`

let imageFolderPath = "/assets/images/homepage/"; // Changed to imageFolderPath
let imageFiles = [
    imageFolderPath + "001.jpg",
    imageFolderPath + "002.jpg",
    imageFolderPath + "003.jpg",
    imageFolderPath + "004.jpg",
    imageFolderPath + "005.jpg",
    imageFolderPath + "006.jpg",
    imageFolderPath + "007.jpg",
    imageFolderPath + "008.jpg",
    imageFolderPath + "009.jpg",
    imageFolderPath + "010.jpg",
];

let imageTemplate = (url)=>`
    <div class="swiper-slide w-full">
			<img src="${url}" class="rounded-lg w-full" />
	</div>
`
    


