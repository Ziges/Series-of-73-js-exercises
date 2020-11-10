/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // to get the value of an input: document.getElementById("element-id").value
    // your code here

    document.getElementById("run").addEventListener("click", function () {
        // change color dynamically

        var randomRgbNumber = Math.floor(Math.random() * 16777215).toString(16);

        document.body.style.backgroundColor = "#" + randomRgbNumber;
    });


    // or
    //
    // function randomColor() {
    //
    //     const hexCode = "0123456789ABCDEF";
    //     let color = "#";
    //     for (let i = 0; i < 6; i++) {
    //         color = color + hexCode[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    //
    // }
    //
    // document.getElementById("run").addEventListener("click", function () {
    //
    //     document.body.style.backgroundColor = randomColor();


    })();
