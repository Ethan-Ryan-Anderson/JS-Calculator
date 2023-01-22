
var mainnum = '';
var subnum = '';
var operand = '';
var decamount = 0;
var operandcnt = 0;
var output = document.getElementById('output');

var outputstring = '';


function opperand(opp) {
    if (operandcnt % 2 == 0) {
        equals();
        operand = opp;
        operandcnt++;
    }
    else {
        operand = opp;
        operandcnt++;
    }

}

function number(num) {
    if (operandcnt == 0) {
        mainnum = mainnum + num;
        console.log(mainnum);
       // output.innerHTML = mainnum;
    }

   else if (operandcnt % 2 == 0) {
    if (operand == '+') {
       mainnum = Number(mainnum) + Number(num);
       console.log(mainnum);
       operand = '';
       // output.innerHTML = mainnum;
    }
    else if (operand == '-') {
        mainnum = Number(mainnum) - Number(num);
        console.log(mainnum);
        operand = '';
       // output.innerHTML = mainnum;
    }
    else if (operand == '*') {
        mainnum = Number(mainnum) * Number(num);
        console.log(mainnum);
        operand = '';
         // output.innerHTML = mainnum;
    }
    else if (operand == '/') {
        mainnum = Number(mainnum) / Number(num);
        console.log(mainnum);
        operand = '';
        // output.innerHTML = mainnum;
    }
    }
    else if (operandcnt % 2 == !0) {
    subnum = subnum + num;
         console.log(subnum);
        //output.innerHTML = mainnum;
    }
}

function outputtext() {// if mainnum is infinty or NaN then log to console
    if (mainnum == 'Infinity' || mainnum == 'NaN') {
        output.innerHTML = 'Syntax Error';
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
    output.innerHTML = " "; //THERE IS AN INVISIBLE UNICODE CAHRACTER IN THE OUTPUT TO HAVE IT LOOK RIGHT
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
        mainnum = Number(mainnum) / 100;
        subnum = '';
        operand = '';
    }
}