/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function() {

        // your code here

        var a = Number(document.getElementById("number").value);
        var c = 1;

        if (a == 0 || a == 1){

            alert("ERROR");

        } else {

            for ( let i = a; i > 0; i--){

                c = c*i;
                console.log(c);
            }
            //outside of your loop, but still inside the else statement!
            // console.log(c);
        }


        // to get the value of an input: document.getElementById("element-id").value

    // document.getElementById("run").addEventListener("click", function () {
    //
    //     // your code here
    //     var n = document.getElementById("number").value;
    //
    //     var x = 1;
    //     while (n > 1) {
    //         x *= n;
    //         n--;
    //     }
    //     alert(x);

        //or

        // var factorial = 1;
        // for (var i = n; i > 0; i--){
        //     factorial *= i;
        // }
        // alert(factorial);

    });

})();
