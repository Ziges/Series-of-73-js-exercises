/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // as all elements have the same class we use getelementsbyclassname on the DOM
    // https://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp

    let x = document.getElementsByClassName("target");
    let i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = "You got owned!";
    }

})();
