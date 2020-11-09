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

        let operand = document.getElementsByClassName("operator").innerHTML;

        let x = Number(document.getElementById("op-one").value);
        let y = Number(document.getElementById("op-two").value);

        switch(operand)
        {
            case "+":
                console.log(x+y);
                break;
            case "-":
                console.log(x-y);
                break;
            case "*":
                console.log(x*y);
                break;
            case "/":
                console.log(x/y);
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
