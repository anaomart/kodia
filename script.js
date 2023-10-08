const parallaxElement = document.querySelectorAll(".parallax-element");
const screenWidth = window.screen.width;
let lastScrollY = window.scrollY;
const body = document.querySelector("body");
// parallax scrolling
window.addEventListener("scroll", function() {
    const scrollY = window.scrollY;
    console.log({ scrollY });
    const scrollDirection = scrollY > lastScrollY ? "down" : "up";
    for (let i = 0; i < parallaxElement.length; i++) {
        if (scrollDirection == 'down') {
            parallaxElement[i].style.transform = `translateY(${-scrollY *20}px)`;
            parallaxElement[1].style.opacity = (scrollY / 5000)

        } else {
            parallaxElement[i].style.transform = `translateY(0px)`
            parallaxElement[i].style.opacity = 1;


        }

        // // remove layout mene on scroll
        // if (screenWidth < 1024 && Math.abs(lastScrollY - scrollY) > 30) {
        //     layoutMenu.style.height = "0";
        //     bottomNav.style.opacity = 0
        //     bottomNav.style.display = 'none'
        // }
    }
    lastScrollY = scrollY;
}, false);

// hovering lighting
const listItems = document.querySelectorAll(".bottom-nav a");
const list = document.querySelector(".bottom-nav");

list.addEventListener("mouseleave", function() {
    listItems.forEach(item => {
        item.style.color = "white";
    });
});
listItems.forEach(item => {
    item.addEventListener("mouseover", function() {
        item.style.color = "white";
        listItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.style.color = "gray";
            }
        });
    });
});

// open navbar

const navbarButton = document.querySelector('.mobile-nav .menu')
const layoutMenu = document.querySelector('.layout-menu')
const bottomNav = document.querySelector('.bottom-nav')

navbarButton.addEventListener('click', () => {
    console.log("click")

    if (layoutMenu.style.height == '') {
        bottomNav.style.opacity = 1
        layoutMenu.style.height = "100%";
        bottomNav.style.display = 'flex'


    } else {
        layoutMenu.style.height = "";
        bottomNav.style.opacity = 0
        bottomNav.style.display = 'none'


    }
})

// image shows up(third section)
const hiddenElement = document.querySelectorAll('.f-card *')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')

        }
    })
})
hiddenElement.forEach(el => {
    el.classList.add('hidden')
    observer.observe(el)
})