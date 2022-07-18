// window.location.href = "#footer";


//frequently asked question section

const driveOutMenuButtons = document.querySelectorAll('#drive-out-menu-button');
const questions = document.querySelectorAll('#question');

let openAndCloseDetails = e => {
    const answer = e.currentTarget.parentNode.nextElementSibling;
    const open = e.currentTarget.querySelector('#open');
    const close = e.currentTarget.querySelector('#close');
    console.log(`Hello World ${e.currentTarget}, ${answer}`)
    if(answer.hidden){
        console.log(`Hidden`)
        answer.removeAttribute('hidden');
        open.removeAttribute('hidden');
        close.setAttribute('hidden', true);
    } else {
        answer.setAttribute('hidden', true);
        open.setAttribute('hidden', true);
        close.removeAttribute('hidden');
    }
}

driveOutMenuButtons.forEach(button => button.addEventListener('click', openAndCloseDetails));
questions.forEach(button => button.addEventListener('click', openAndCloseDetails));


// Form for newsletter

var input = document.getElementById('input-field');
var form  = document.getElementById('contact-form-for-newsletter');
var inputWithError = document.getElementById('input-with-error');
var errorMessage = document.getElementById('error-message');

input.addEventListener('invalid', function(event){
    event.preventDefault();
    if ( ! event.target.validity.valid ) {
        errorMessage.textContent   = "Whoops, make sure it's an email";
        errorMessage.style.paddingTop = '.3rem';
        errorMessage.classList.add('error');
        inputWithError.classList.remove('input-with-error--no-error')
    }
});


input.addEventListener('input', function(event){
    if ( true === errorMessage.classList.contains('error') ) {
        errorMessage.textContent   = "";
        errorMessage.style.paddingTop = '0';
        errorMessage.classList.remove('error');
        inputWithError.classList.add('input-with-error--no-error')
    }
})


// primary menu for smal screen size
// TO DO: Put all in one container
var headerMenuIcon = document.getElementById('header-menu-icon');

var primaryNav = document.getElementById('primary-nav');
var headerLogoDark = document.getElementById('header-logo-dark');
var headerLogoLight = document.getElementById('header-logo-light')
var headerMenuIcon = document.getElementById('header-menu-icon');
var socialMediaIconsHeader = document.getElementById('social-media-icons-header');

let showMenu = e => {
    // console.log('hello');
    primaryNav.style.inset = 0;
    // headerLogoDark.style.display = 'none';
    headerLogoLight.style.display = 'flex';
    headerMenuIcon.style.display = 'none';
    socialMediaIconsHeader.style.display = 'block';

}

headerMenuIcon.addEventListener('click', showMenu);



