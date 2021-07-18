let burger = document.querySelector('.menu')
let menu = document.querySelector('.menu-wrapper')
let body = document.querySelector('body')

function toggleMenu () {
    if (!body.classList.contains('show-menu')) {
        body.classList.add('show-menu')
    }
    else {
        body.classList.remove('show-menu')
    }
}

burger.addEventListener('click', toggleMenu)