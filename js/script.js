// Toggle Class Active 

const navbarNav = document.querySelector('.navbar-nav');

// ketika hum-menu di klik
document.querySelector('#ham-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


// klik di luar sidebar untuk menghilangkan nav

const hum = document.querySelector('#ham-menu');

document.addEventListener('click', function(e) {
    if(!hum.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})