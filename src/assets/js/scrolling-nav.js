function scrollTo(e) {
    var distanceToTop = function(el) {
        try {
            return Math.floor(el.getBoundingClientRect().top);
        } catch(err) {
            console.log(err);
        }
    };

    var checkIfDone = setInterval(function() {
        var atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = "-1";
            targetAnchor.focus();
            window.history.pushState("", "", targetID);
            clearInterval(checkIfDone);
        }
    }, 100);

    var targetID = this.getAttribute("href");
    var targetAnchor = document.querySelector(targetID);
    var originalTop = distanceToTop(targetAnchor);
    var offset = document.querySelector('.l-nav-primary-desktop').offsetHeight;

    e.preventDefault();

    if (!targetAnchor) {
        return;
    }

    window.scrollBy({ top: originalTop - offset, left: 0, behavior: "smooth" });

}

// grab links
var linksToAnchors = document.querySelectorAll('a.page-scroll');
// Event handler for clicking on links
linksToAnchors.forEach(function(each) { each.onclick = scrollTo; });
