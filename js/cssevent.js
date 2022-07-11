const searchForm = document.querySelector(".search-form");
const magIcon = document.querySelector(".search-form i");
const underLine = document.querySelector(".search-underline");

function onMouseOver() {
    magIcon.style.color = "white";
    underLine.style.borderBottomColor = "rgba(255, 255, 255, 0.6)";
    magIcon.style.transition = "all 0.5s ease-in-out";
    underLine.style.transition = "all 0.5s ease-in-out";
}

function onMouseLeave() {
    magIcon.style.color = "rgba(255, 255, 255, 0.6)";
    underLine.style.borderBottomColor = "rgba(255, 255, 255, 0)";
    magIcon.style.transition = "all 0.5s ease-in-out";
    underLine.style.transition = "all 0.5s ease-in-out";
}

searchForm.addEventListener("mouseover", onMouseOver);

searchForm.addEventListener("mouseleave", onMouseLeave);
