let home_container = document.getElementById('Home'),
 events_container = document.getElementById('Events'),
 publication_container = document.getElementById('Publication'),
 team_container = document.getElementById('Team'),
 gallery_container = document.getElementById('Gallery'), 
 contact_container = document.getElementById('Contact'), 
 Seds_Loyola_nav = document.getElementById('Seds_Loyola_nav');

 let navigation_items = document.querySelectorAll('#navigation_items > li'), 
 sidebar_navigation = document.querySelectorAll('#sidebar_navigation > li'), 
 scroll_to_top = document.getElementById('scroll_top_circle');

 let locations = { home_location : home_container.getBoundingClientRect().y,
    events_location : events_container.getBoundingClientRect().y,
    publication_location : publication_container.getBoundingClientRect().y,
    team_location : team_container.getBoundingClientRect().y,
    gallery_location : gallery_container.getBoundingClientRect().y,
    contact_location : contact_container.getBoundingClientRect().y,
}

console.log(locations)

navigation_items.forEach(element => {

    element.onclick = ()=>{
        console.log("hello")
        console.log(element.id)
        window.scroll({
        top: locations[`${element.id}_location`] - 55, 
        behavior: "smooth"
        })
    }});

    Seds_Loyola_nav.onclick = ()=>{
        console.log("Helloooo")
        window.scroll({
            top: 0, 
            behavior: "smooth"
            })
    }


sidebar_navigation.forEach(element => {

        element.onclick = ()=>{
            window.scroll({
            top: locations[`${element.id}_location`] - 55, 
            behavior: "smooth"
            })
        }});

window.onscroll = e =>{
    if(window.scrollY > 100 ){
        scroll_to_top.classList.remove('-right-52')
        scroll_to_top.classList.add('right-5')
    }

    if( window.scrollY <= 100) {
        scroll_to_top.classList.add('-right-52')
        scroll_to_top.classList.remove('right-5')
    }
}

scroll_to_top.onclick = ()=>{
    window.scroll({
        top: 0, 
        behavior: "smooth"
    })
}

