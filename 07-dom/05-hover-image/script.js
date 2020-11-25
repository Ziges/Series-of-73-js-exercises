/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let image = document.querySelector('img');
    let hover = image.getAttribute('data-hover');
    let src = image.getAttribute('src');

    image.addEventListener('mouseover', function () {
        image.src = hover;
    })

    image.addEventListener('mouseout', function () {
        image.src = src;
    })

})();
