/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    // https://htmldom.dev/count-the-number-of-characters-of-a-textarea/

    const messageEle = document.getElementById('pass-one');
    const counterEle = document.getElementById('counter');

    messageEle.addEventListener('input', function(e) {
        const target = e.target;

        // Get the `maxlength` attribute
        const maxLength = target.getAttribute('maxlength');

        // Count the current number of characters
        const currentLength = target.value.length;
        counterEle.innerHTML = `${currentLength}/${maxLength}`;
    });
})();
