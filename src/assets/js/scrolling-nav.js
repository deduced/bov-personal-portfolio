//@TODO: This is not yet working in Safari. Test and fix.

function scrollTo(e) {
    var distanceToTop = function (el) {
            try {
                return Math.floor(el.getBoundingClientRect().top);
            } catch (err) {
                console.log(err);
            }
        },
        targetID = this.getAttribute("href"),
        targetAnchor = document.querySelector(targetID),
        originalTop = distanceToTop(targetAnchor),
        offset = document.querySelector('.l-nav-primary-desktop').offsetHeight;

    e.preventDefault();

    if (!targetAnchor) {
        return;
    }

    window.scrollBy({ top: originalTop - offset, left: 0, behavior: "smooth" });

}

// grab links
var linksToAnchors = document.querySelectorAll('a.page-scroll');
// Event handler for clicking on links
linksToAnchors.forEach(function (each) {
    each.onclick = scrollTo;
});
