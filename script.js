let navigationResponsiveButton = document.querySelector('.navigation-header-responsive');
let navItem = document.querySelectorAll('.nav-item');

const showNavigation = e => {
    e.preventDefault();
    let navigationHeader = document.querySelector('.navigation-header');
    navigationHeader.classList.toggle('slide-down');
}

const smoothNavigation = function(e) {
    let linkNav = this.children;
    let linkNavHref = linkNav[0].getAttribute('href');
    let destinationScroll = document.querySelector(linkNavHref);
    let offsetMinus = 60;

    switch (linkNavHref) {
        case '#profile':
            offsetMinus = 90;
            break;
    }

    window.scrollTo({
        top: destinationOffset - offsetMinus,
        behavior: "smooth"
    });

    e.preventDefault();
}

navigationResponsiveButton.addEventListener('click', showNavigation);
navItem.forEach(nav => {
    nav.addEventListener('click', smoothNavigation);
});

function gambar1() {
    document.getElementById('fish').src = 'assets/fishs1.jpg';
}

function gambar2() {
    document.getElementById('fish').src = 'assets/home.jpg';
}

function gambar3() {
    document.getElementById('fish').src = 'assets/home1.jpg';
}

function gambar4() {
    document.getElementById('fish').src = 'assets/home2.jpg';
}

function gambar5() {
    document.getElementById('fish').src = 'assets/fishs2.jpg';
}

let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

li.forEach(Turn => {
    Turn.addEventListener('click', function() {
        ul.querySelector('.active').classList.remove('active');

        Turn.classList.add('active');
    });
});