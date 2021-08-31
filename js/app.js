window.addEventListener("load", () => {
    // menu
    const burger = document.querySelector(".burger");
    const headerMenu = document.querySelector(".header__menu");
    burger.addEventListener("click", () => {
        headerMenu.classList.toggle("header__menu-open");
        burger.classList.toggle("burger-open");
    });
    // large image
    const boxLargeImage = document.querySelector(".large__image");
    const largeImage = document.querySelector(".large__image img");
    const smallImages = document.querySelectorAll(".popular__menu__item img");
    const header = document.querySelector("header");
    smallImages.forEach((smallImage, index) => {
        smallImage.addEventListener("click", () => {
            window.scrollTo({
                top: header.offsetHeight,
                left: 0,
                behavior: 'smooth'
            });
            boxLargeImage.classList.toggle("large__image__open");
            boxLargeImage.style.pointerEvents = "auto";
            largeImage.src = smallImages[index].src;
        });
    });
    boxLargeImage.addEventListener("click", (e) => {
        if(e.target !== largeImage) {
            boxLargeImage.classList.toggle("large__image__open");
            boxLargeImage.style.pointerEvents = "none";
        }
    });
    // image discount appear
    const discountImages = document.querySelectorAll(".discount__row img");
    window.addEventListener("scroll", ()=> {
        discountImages.forEach((discountImage, index) => {
            if(discountImage.getBoundingClientRect().top <= window.innerHeight / 1.5 && discountImage.getBoundingClientRect().top >= -window.innerHeight / 1.5) {
                discountImage.style.opacity = 1;
            } else {
                discountImage.style.opacity = 0;
            }
        });
    });
    // up to top
    const upToTop = document.querySelector(".up__to__top");
    upToTop.addEventListener("click", ()=> {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });
});