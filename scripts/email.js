let email_success_container = document.getElementById('email_success'), 
email_failure_container = document.getElementById('email_failure');

const PUBLIC_KEY = "ZCeG18oNsOpTeuyAR";
emailjs.init({
    publicKey: PUBLIC_KEY,
  });

  window.onload = () => {
    document.getElementById('contact_form').addEventListener('submit', (event)=> {
        event.preventDefault();
        emailjs.sendForm('my SEDS service', 'contact_form', document.getElementById('contact_form'))
            .then(() => {
                setTimeout(() => {
                    email_success_container.classList.remove('-right-96');
                    email_success_container.classList.add('right-5');
                }, 1000);
        
                setTimeout(() => {
                    email_success_container.classList.add('-right-96');
                email_success_container.classList.remove('right-5');
                }, 4000);
        
            }, (error) => {
                setTimeout(() => {
                    email_failure_container.classList.remove('-right-96');
                    email_failure_container.classList.add('right-5');
                }, 1000);
        
                setTimeout(() => {
                    email_failure_container.classList.add('-right-96');
                email_failure_container.classList.remove('right-5');
                }, 4000);
        
            });
    });
}

