var mainnum = "";
var subnum = "";
var postoperand = false;
var operand = "";
var decamount = 0;
var operandcnt = 0;
var output = document.getElementById("output");
var outputstring = "";
//operands, for the first operand it just sets the operand, for the second operand it runs the equals function and then sets the operand
function opperand(opp) {
  if (operandcnt >= 1) {
    equals();
    operand = opp;
    operandcnt++;
  } else {
    operand = opp;
    operandcnt++;
  }
}
//num sets numbers and is extra beefy because it has to handle logic for making two presses of a a number to make double digit numbers exaplme 1+1=11
function number(num) {
  //set mainnum
  if (operandcnt == 0) {
    mainnum = mainnum + num;
    console.log(mainnum);
  }
  //logic for setting subnum
  else if (operandcnt % 2 == 0) {
    subnum = subnum + num;
  } else if (operandcnt % 2 == !0) {
    subnum = subnum + num;
    console.log(subnum);
  } else {
    console.log("error");
  }
}
//sets the display text and errors if user creates a math error
function outputtext() {
  if (
    mainnum == "Infinity" ||
    mainnum == -"Infinity" ||
    mainnum == "NaN" ||
    mainnum == "-NaN"
  ) {
    output.innerHTML =
      "You did some dumbshit, like divide by zero, or have multiple operands in a row, and or have more than one decimal point in a number.";
  } else {
    outputstring = mainnum + operand + subnum;
    output.innerHTML = outputstring;
  }
}
//reset all vars
function ac() {
  mainnum = "";
  subnum = "";
  postoperand = false;
  operand = "";
  decamount = 0;
  operandcnt = 0;
  outputstring = "";
  output.innerHTML = "Cleared";
}
//does math to find the sum of the two numbers
function equals(a) {
  if (operand == "+") {
    var sum = Number(mainnum) + Number(subnum);
    console.log(sum);
    // output.innerHTML = sum;
    mainnum = sum.toString();
    subnum = "";
    operand = "";
  } else if (operand == "-") {
    var sum = Number(mainnum) - Number(subnum);
    console.log(sum);
    //  output.innerHTML = sum;
    mainnum = sum.toString();
    subnum = "";
    operand = "";
  } else if (operand == "*") {
    var sum = Number(mainnum) * Number(subnum);
    console.log(sum);
    //  output.innerHTML = sum;
    mainnum = sum.toString();
    subnum = "";
    operand = "";
  } else if (operand == "/") {
    var sum = Number(mainnum) / Number(subnum);
    console.log(sum);
    //  output.innerHTML = sum;
    mainnum = sum.toString();
    subnum = "";
    operand = "";
  } else if (operand == "%") {
    var sum = Number(mainnum) / 100;
    console.log(sum);
    //  output.innerHTML = sum;
    mainnum = sum.toString();
    subnum = "";
    operand = "";
  }
}
