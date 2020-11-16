/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here

    let today = new Date(); //the date object

    // ADD WEEK DAYS IN AN ARRAY.
    let weekday = ['Sunday', 'Monday', 'Tuesday',
        'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // ADD MONTHS IN AN ARRAY.
    let months = ['January', 'February', 'March',
        'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'];


    let fullDate = weekday[today.getDay()] + " " + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear() + ", " + today.getHours() + "h" + today.getMinutes();

    console.log(fullDate);

    document.getElementById("target").innerHTML = fullDate;

})();
