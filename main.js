
//get sumbit button element through its ID (result)
const sbm = document.getElementById("result");

//get the p tags through their IDs
const sum = document.getElementById("output1");

const difference = document.getElementById("output2");

const multiple = document.getElementById("output3");

const quotient = document.getElementById("output4");

// Perform addition, subtraction, multiplication, and division through this function
function calculations(){

            //we declared the inputs and got the input elements in the function so that we may use them everytime the submit button is clicked
            const nb1 = document.getElementById("num1").value;

            const nb2 = document.getElementById("num2").value;

            //perform operations and save them in these vairable (we do this so that the results can be concatentated with a string later on and the concatenation does not interfere with the operation)
            s = Number(nb1) + Number(nb2);

            d = Number(nb1) - Number(nb2);

            m = Number(nb1) * Number(nb2);

            q = Number(nb1) / Number(nb2);

            //save the values in the p tags
            sum.innerHTML ="Sum of Numbers: " + s;

            difference.innerHTML = "Difference of Numbers: " + d;

            multiple.innerHTML = "Multiple of Numbers: " + m;

            quotient.innerHTML = "Quotient of Numbers: " + q;
}

    //event listener would check if the submit button is clicked, if so them the function will be invoked and the results displayed
    sbm.addEventListener("click", calculations);





