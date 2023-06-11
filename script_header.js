var header = document.getElementById("header");
var navigationHeader = document.getElementById("navigation_header")
var content = document.getElementById("content")
var showSidebar = false;

function toggleSidebar() {

    showSidebar = !showSidebar
    if (showSidebar) {

        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar'
        content.style.filter = 'blur(2px)'

    } else {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = ''
        content.style.filter = ''
    }
}

function closedSideBar() {
    if (showSidebar) {
        toggleSidebar();
    }


}
window.addEventListener('resize', function (event) {

    if (window.innerWidth > 768 && showSidebar) {
        toggleSidebar()
    }

});
$(document).ready(function () {
    if (window.location.hash) {
        window.location.hash = "";
    }
});

$(document).ready(function () {
    $('a.scroll-link').click(function (e) {
        e.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
        window.history.replaceState(null, null, window.location.pathname + window.location.search);
    });
});