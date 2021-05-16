function setPage(event) {
    var pageId = event.target.id;
    var allPages = document.querySelectorAll(['.js-page1', '.js-page2', '.js-page3']);
    var allMenuItems = document.querySelectorAll('.js-menu-item');
    allPages.forEach(function(element) {
        if (element.classList.contains('js-' + pageId)) {
            element.classList.add('is-active');
        } else {
            element.classList.remove('is-active');
        }
    })
    allMenuItems.forEach(function(element) {
        if (element.id === pageId) {
            element.classList.add('is-active');
        } else {
            element.classList.remove('is-active');
        }
    })
}

window.addEventListener('load', function() {
    document.querySelectorAll('.js-menu-item').forEach(function(element) {
        element.addEventListener('click', setPage);
    })
})