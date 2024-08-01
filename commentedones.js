// let home_container = document.getElementById('Home'),
//  about_container = document.getElementById('AboutMe'),
//  skills_container = document.getElementById('Skills'),
//  projects_container = document.getElementById('Projects'),
//  contact_container = document.getElementById('Contact'),
//  navigation_items = document.querySelectorAll('#navigation_items > li'),
//  sidebar_navigation = document.querySelectorAll('#sidebar_navigation > li'),
//  scroll_to_top = document.getElementById('scroll_top_circle');


// let locations = { home_location : home_container.getBoundingClientRect().y,
//     about_location : about_container.getBoundingClientRect().y,
//     skills_location : skills_container.getBoundingClientRect().y,
//     projects_location : projects_container.getBoundingClientRect().y,
//     contact_location : contact_container.getBoundingClientRect().y
// }


// emailjs.init({
//     publicKey: PUBLIC_KEY,
//   });

// window.onload = () => {
//     document.getElementById('contact_form').addEventListener('submit', (event)=> {
//         event.preventDefault();
//         emailjs.sendForm('portfoliowebsite', 'contact_form', document.getElementById('contact_form'))
//             .then(() => {
//                 setTimeout(() => {
//                     email_success_container.classList.remove('-right-96');
//                     email_success_container.classList.add('right-5');
//                 }, 1000);
        
//                 setTimeout(() => {
//                     email_success_container.classList.add('-right-96');
//                 email_success_container.classList.remove('right-5');
//                 }, 4000);
        
//             }, (error) => {
//                 setTimeout(() => {
//                     email_failure_container.classList.remove('-right-96');
//                     email_failure_container.classList.add('right-5');
//                 }, 1000);
        
//                 setTimeout(() => {
//                     email_failure_container.classList.add('-right-96');
//                 email_failure_container.classList.remove('right-5');
//                 }, 4000);
        
//             });
//     });
// }

// document.getElementById('hellooo').onclick = ()=>{
//     console.log(submitBtn.getBoundingClientRect().y)
//     window.scroll({
//         top: contact_location - 55,
//         behavior: "smooth",
//       });
// }

// navigation_items.forEach(element => {

//     element.onclick = ()=>{
//         window.scroll({
//         top: locations[`${element.id}_location`] - 55, 
//         behavior: "smooth"
//         })
//     }});


// sidebar_navigation.forEach(element => {

//         element.onclick = ()=>{
//             window.scroll({
//             top: locations[`${element.id}_location`] - 55, 
//             behavior: "smooth"
//             })
//         }});

// window.onscroll = e =>{
//     if(window.scrollY > 100 ){
//         scroll_to_top.classList.remove('-right-52')
//         scroll_to_top.classList.add('right-5')
//     }

//     if( window.scrollY <= 100) {
//         scroll_to_top.classList.add('-right-52')
//         scroll_to_top.classList.remove('right-5')
//     }
// }

// scroll_to_top.onclick = ()=>{
//     window.scroll({
//         top: 0, 
//         behavior: "smooth"
//     })
// }

