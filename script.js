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
    }

   else if (operandcnt % 2 == 0) {
    if (operand == '+') {
        subnum = Number(subnum) + Number(num);
        console.log(subnum);
    }
    else if (operand == '-') {
        subnum = Number(subnum) + Number(num);
        console.log(subnum);
    }
    else if (operand == '*') {
        subnum = Number(subnum) + Number(num);
        console.log(subnum);

    }
    else if (operand == '/') {
        subnum = Number(subnum) + Number(num);
        console.log(subnum);
    }

    else if (operandcnt % 2 == !0) {
        subnum = Number(subnum) + num;
         console.log(subnum);
    }

    else {
        console.log('error');
    }

    }

    else if (operandcnt % 2 == !0) {
        subnum = subnum + num;
         console.log(subnum);
    }
}


function outputtext() {
    if (mainnum == 'Infinity' || mainnum == -'Infinity' || mainnum == 'NaN' || mainnum == '-NaN') {
        output.innerHTML = 'You did some dumbshit, like divide by zero, or have multiple operands in a row, and or have more than one decimal point in a number.';
    }
    else {
    outputstring = mainnum + operand + subnum;
    output.innerHTML = outputstring;
    }
}

function ac() {
    mainnum = '';
    subnum = '';
    operand = '';
    output.innerHTML = 'Cleared';
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
    else if (operand == '%') {
        var sum = Number(mainnum) / 100;
        console.log(sum);
      //  output.innerHTML = sum;
        mainnum = sum.toString();
        subnum = '';
        operand = '';
    }

}