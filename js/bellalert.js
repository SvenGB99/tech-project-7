const alertDot = document.getElementById("notifications");
// create the html for the banner
alertDot.innerHTML =
`
<div class="alert-dot">
<a href="#" class="notification">
                <span class="badge"><span class="alert-dot-close" onclick="this.parentElement.style.display='none';">&bull;</span></span>
            </a>
</div>
`
alertDot.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-dot-close")) {
    alert.style.display = "none"
}
});