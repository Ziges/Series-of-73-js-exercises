/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation

        var operand = document.getElementsById(innerHTML);


        // Check met console log: wat zit er in je operand variabele? Klopt dat? Is het van hetzelfde datatype als waarmee je vergelijkt?

        var x = Number(document.getElementById("op-one").value);
        var y = Number(document.getElementById("op-two").value);

        switch(operand)
        {
            case "+":
                var result = x + y;
                console.log(result);
                break;
            case "-":
                var result = x - y;
                console.log(result);
                break;
            case "*":
                var result = x * y;
                console.log(result);
                break;
            case "/":
                var result = x / y;
                console.log(result);
                break;
            default:
                alert("I don't know this operand.");
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
