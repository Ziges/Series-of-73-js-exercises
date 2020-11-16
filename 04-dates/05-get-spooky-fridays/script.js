/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementById("run").addEventListener("click", function () {

        let today = new Date(); //the date object

        // ADD WEEK DAYS IN AN ARRAY.
        let weekday = ['Sunday', 'Monday', 'Tuesday',
            'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        // ADD MONTHS IN AN ARRAY.
        let months = ['January', 'February', 'March',
            'April', 'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'];

        // for a given year

        console.log(today);

        // if (weekday[today.getDay()] == 'Friday' && today.getDate() == 13) {
        //     alert(months[today.getMonth()]);
        // }

    });

})();
