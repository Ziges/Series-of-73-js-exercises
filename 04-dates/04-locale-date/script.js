/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

    let today = new Date();
    let fullDate = today.getDay() + " " + today.getDate() + " " + today.getMonth() + " " + today.getFullYear() + ", " + today.getHours() + "h" + today.getMinutes();

    console.log(fullDate);

    document.getElementById("target").innerHTML = fullDate;

})();
