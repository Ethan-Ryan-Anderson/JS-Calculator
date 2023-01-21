var mainnum = '';
var subnum = '';
var postoperand = false;
var operand = '';
var decamount = 0;
var operandcnt = 1




function opperand(opp) {
    operand = opp;
    operandcnt++;
    }

function number(num) {
    if (operandcnt % 2 == !0) {
    mainnum = mainnum + num;
        console.log(mainnum);
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
        mainnum = sum.toString();
        subnum = '';
    }
    else if (operand == '-') {
        var sum = Number(mainnum) - Number(subnum);
        console.log(sum);
        mainnum = sum.toString();
        subnum = '';
    }
    else if (operand == '*') {
        var sum = Number(mainnum) * Number(subnum);
        console.log(sum);
        mainnum = sum.toString();
        subnum = '';
    }
    else if (operand == '/') {
        var sum = Number(mainnum) / Number(subnum);
        console.log(sum);
        mainnum = sum.toString();
        subnum = '';
            }

}
