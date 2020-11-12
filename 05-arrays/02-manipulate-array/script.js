/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    // your code here

    // Using delete may leave undefined holes in the array. Use pop() or shift() instead.


    document.getElementById("run").addEventListener("click", function () {
        // your code here
        fruits.shift();            // Removes the first element "banana" from fruits
        console.log(fruits);

        fruits.pop();              // Removes the last element ("cerise") from fruits
        console.log(fruits);

        fruits.unshift ("Banana");    // Adds a new element "Lemon" to fruits at beginning
        console.log(fruits);

        fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits at the end
        console.log(fruits);
    });
})();
