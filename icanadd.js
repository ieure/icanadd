
var range = 10;
var operator = "+";
var numProblems = 100;
var problemNumber = 1;
var correct = 0;
var incorrect = 1;

function run() {
    range = $('#range').val();
    operator = $('#operator').val();
    numProblems = $('#numProblems').val();
    problemNumber = 1;

    $('#setup').hide();
    $('#worksheet').show();

    nextProblem();
}

function nextProblem() {
    $('#answer').val('').focus();
    var a = Math.floor(Math.random() * 10000 % range + 1);
    var b = Math.floor(Math.random() * 10000 % range + 1);
    if (operator == "-" && a >= b) {
        $('#op_l').html(a);
        $('#op_r').html(b);
    } else {
        $('#op_l').html(b);
        $('#op_r').html(a);
    }

    $('#op').html(operator);
}

function check() {
    var l = $('#op_l').html();
    var r = $('#op_r').html();
    switch (operator) {
    case "+":
        var answer = l + r;
        break;
    case "-":
        var answer = l - r;
        break;
    }
    if ($('#answer').val() == answer) {
        correct++;
    } else {
        incorrect++;
        $('#last').html(l + ' ' + operator + ' ' + r + ' = ' + answer);
    }
    problemNumber++

    if (problemNumber <= numProblems) {
        nextProblem();
    } else {
        setup();
    }
    return false;
}

function setup() {
    $('#setup').show();
    $('#worksheet').hide();
}

function init() {
    $('#go').bind('click', run);
    $('#worksheet form').bind('submit', check);
}


init();
