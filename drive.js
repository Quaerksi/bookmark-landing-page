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
        errorMessage.style.paddingBottom = '.5rem';
        errorMessage.classList.add('error');
        inputWithError.classList.remove('input-with-error--no-error')
    }
});


input.addEventListener('input', function(event){
    if ( true === errorMessage.classList.contains('error') ) {
        errorMessage.textContent   = "";
        // errorMessage.style.paddingTop = '0';
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
var closeMenuX = document.getElementById('close-menu-x');

let showMenu = e => {
    primaryNav.style.inset = 0;
    headerLogoLight.style.display = 'flex';
    headerMenuIcon.style.display = 'none';
    socialMediaIconsHeader.style.display = 'block';
}

let closeMenu = e => {
    primaryNav.style.inset = '-800px -800px 800px 800px ';
    headerLogoLight.style.display = 'none';
    headerMenuIcon.style.display = 'block';
    socialMediaIconsHeader.style.display = 'none';
}

headerMenuIcon.addEventListener('click', showMenu);
closeMenuX.addEventListener('click', closeMenu)


// features

var tabButtons = document.querySelectorAll('#tab-arround button');
var bookmarking = document.getElementById('bookmarking');
var searching = document.getElementById('searching');
var sharing = document.getElementById('sharing');

var allTabs = [bookmarking, searching, sharing];

showFeature = e => {
    // console.log(`Hello ${e.currentTarget.name}`)
    const {name} = e.currentTarget;

    tabButtons.forEach(button =>{
        if(button.getAttribute('name') === name){
            button.setAttribute('aria-selected', 'true');
        } else {
            button.setAttribute('aria-selected', 'false');
        }
    })

    allTabs.forEach(tab => {
        if(tab.getAttribute('id') === name ){
            tab.removeAttribute('hidden')
        } else {
            tab.hidden = 'true';
            tab.removeAttribute('aria-selected')
        }
    })
    
}

tabButtons.forEach(button => button.addEventListener('click', showFeature))





