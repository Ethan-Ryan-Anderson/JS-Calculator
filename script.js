var mainnum = '';
var subnum = '';
var postoperand = false;
var operand = '';
var decamount = 0;
var operandcnt = 0;
var output = document.getElementById('output');
var outputstring = '';


function opperand(opp) {
    if (operandcnt >= 1) {
        equals();
        operand = opp;
        operandcnt++;
    }
    else {
        operand = opp;
        operandcnt++;
    }

}

    /////////////////
function number(num) {
    if (operandcnt == 0) {
        mainnum = mainnum + num;
        console.log(mainnum);
       // output.innerHTML = mainnum;
    }

   else if (operandcnt % 2 == 0) {
       mainnum = Number(mainnum) + Number(num);
       console.log(mainnum);
       operand = '';
       // output.innerHTML = mainnum;
    }
    else if (operandcnt % 2 == !0) {
    subnum = subnum + num;
         console.log(subnum);
        //output.innerHTML = mainnum;
    }
}

function outputtext() {
    if (mainnum === Infinity || mainnum === -Infinity || mainnum === NaN || mainnum === -NaN) {
        output.innerHTML = 'You did some dumbshit, like divide by zero';
    }
    else {
    outputstring = mainnum + operand + subnum;
    output.innerHTML = outputstring;
    }
}

function ac() {
    mainnum = '';
    subnum = '';
    postoperand = false;
    operand = '';
}

function equals(a) {
    if (operand == '+') {
        var sum = Number(mainnum) + Number(subnum);
        console.log(sum);
       // output.innerHTML = sum;
        mainnum = sum.toString();
        subnum = '';
        operand = '';
    }
    else if (operand == '-') {
        var sum = Number(mainnum) - Number(subnum);
        console.log(sum);
      //  output.innerHTML = sum;
        mainnum = sum.toString();
        subnum = '';
        operand = '';
    }
    else if (operand == '*') {
        var sum = Number(mainnum) * Number(subnum);
        console.log(sum);
      //  output.innerHTML = sum;
        mainnum = sum.toString();
        subnum = '';
        operand = '';
    }
    else if (operand == '/') {
        var sum = Number(mainnum) / Number(subnum);
        console.log(sum);
      //  output.innerHTML = sum;
        mainnum = sum.toString();
        subnum = '';
        operand = '';
            }

}
