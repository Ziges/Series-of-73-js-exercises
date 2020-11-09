/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function () {

        // your code here
        var stringNumbers = document.getElementById("numbers").value;

        //converts string of numbers to array of numbers:
        var array = stringNumbers.split(',').map(Number);

        //variable to temporarily hold other variables in order to swap them
        var swap;

        for (var i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                swap = array[i];
                array[i] = array[i + 1];
                array[i + 1] = swap;
            }
        }
        alert(array);
    });

})();
