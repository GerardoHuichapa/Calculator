var aVal = "";
var Operator = "";
var calc = 0;
var dot = 0;

function insertDigit(num)
{
    if(document.form.textview.value === "0" || calc != 0)
    {
        document.form.textview.value = "";
        document.form.textview.value = num;
        calc = 0;
    }
    else
    {
        document.form.textview.value = document.form.textview.value + num;
    }
    
}

function insertDot()
{
    if(dot !=0)
    {
        document.form.textview.value = document.form.textview.value;
    }
    else
    {
        document.form.textview.value = document.form.textview.value + ".";
        dot = 1;
    }
}

function Clear()
{
    document.form.textview.value = "";
    dot = 0;
}

function Back()
{
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length -1);
}

function setOperator(Oper)
{
    aVal = document.form.textview.value;
    document.form.textview.value = "";
    Operator = Oper;
    dot = 0;
    // console.log(Oper);
}



function Equal()
{
    bVal = document.form.textview.value;
    document.form.textview.value = "";
    switch(Operator)
    {
        case "+":
            document.form.textview.value = ((+aVal) + (+bVal)).toFixed(3);
        break;

        case "-":
            document.form.textview.value = ((+aVal) - (+bVal)).toFixed(3);
        break;

        case "x":
            document.form.textview.value = ((+aVal) * (+bVal)).toFixed(3);
        break;

        case "/":
            document.form.textview.value = ((+aVal) / (+bVal)).toFixed(3);
        break;
    }
    calc = 1;
}

// var dot = '.';
// var hola = "a"
// console.log((hola.match(/./) || []).length);