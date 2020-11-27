/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let i = 0;
    let text = document.getElementById("target").innerHTML;
    target.innerHTML = ' ';
    let speed =  50;  /* The speed/duration of the effect in milliseconds */
    let delay = 30;

    function typeWriter() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed, delay);
        }
    }
    typeWriter();


})();
