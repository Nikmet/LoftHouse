const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const topRow = document.querySelector(".header__top-row");

navBtn.addEventListener("click", () => {
    navIcon.classList.toggle("nav-icon--active");
    topRow.classList.toggle("header__top-row--mobile");
    document.body.classList.toggle('no-scroll');
});
