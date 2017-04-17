$(document).ready(function() {
    setup();
    main();
    loadFunctions();
});

var firstArg = 0;
var secondArg = 0;
var op;

var main = function() {}

// var assignListenersByClass = function(e, cb, className) {
//     $(className).each(function() {
//         $(this).addEventListener(e, cb);
//     });
// };

var assignListenersByClass = function(e, cb, className) {
    var ele = document.getElementsByClassName(className);
    for (var i = 0; i < ele.length; i++) {
        ele[i].addEventListener(e, cb);
    }
}

var assignListenersById = function(e, cb, className) {
    var ele = document.getElementById(className);
    ele.addEventListener(e, cb);
}

var addDisplay = function() {
    display = $('#display');

    if (!display.text()) {
        display.text($(this).text());
    } else {
        display.text(display.text() + $(this).text());
    }
}

var addDecimal = function() {
    display = $('#display');
    if (display.text().includes('.')) {
        display.text(display.text());
    } else {
        display.text(display.text() + $(this).text());
    }
}

var clearDisplay = function() {
    display = $('#display');
    display.text('');
}

// var addOperator = function() {
//     display = $('#display');
//
//     if (firstArg) {
//
//         if (display.text()) {
//             firstArg = display.text();
//             op = $(this).text();
//             display.text('');
//         } else {
//             display.text('');
//         }
//     } else {}
//     secondArg = display.text();
//     math(firstArg, op, secondArg);
// }

var addOperator = function() {
    display = $('#display')
    if (!display.text()) {
        op = $(this).text();
        operIndex = 1;
        number1 = 0;
        display.text(number1 + op);
    } else if (isNaN(display.text())) {
        op = $(this).text();
        display.text(number1 + op);
        operIndex = display.text().indexOf(op)
    } else {
        op = $(this).text();
        number1 = Number(display.text());
        display.text(number1 + op);
        operIndex = display.text().indexOf(op)
    }
};

var sumFunc = function() {
    display = $('#display')
    var number2 = Number(display.text().substring(operIndex + 1));
    if (!display.text()) {
        display.text('');
    } else {
        display.text(math(number1, op, number2))
    }
}

var math = function(number1, o, number2) {
    switch (o) {
        case "+":
            return Number(number1 + number2);
            break;
        case "-":
            return Number(number1 - number2);
            break;
        case "*":
            return Number(number1 * number2);
            break;
        case "/":
            return Number(number1 / number2);
            break;
        default:
    }
}

var loadFunctions = function() {
    assignListenersByClass('click', addDisplay, "number");
    assignListenersById('click', addDecimal, "decimal");
    assignListenersByClass('click', addOperator, "operator");
    assignListenersById('click', sumFunc, "sum");
    assignListenersById('click', clearDisplay, "clear");
};

var setup = function() {

    var $tr0 = $('<tr>');
    var $td0a = $('<td colspan="5" id="display">');
    $tr0.append($td0a);
    $('table').append($tr0);

    var $tr1 = $('<tr>');
    var $td1a = $('<td>');
    $td1a.addClass("number");
    var $btn1a = $('<button value="7">7</button>');
    $td1a.append($btn1a);

    var $td1b = $('<td>');
    $td1b.addClass("number");
    var $btn1b = $('<button value="8">8</button>');
    $td1b.append($btn1b);

    var $td1c = $('<td>');
    $td1c.addClass("number");
    var $btn1c = $('<button value="9">9</button>');
    $td1c.append($btn1c);

    var $td1d = $('<td>');
    $td1d.addClass("operator");
    var $btn1d = $('<button value="+">+</button>');
    $td1d.append($btn1d);

    $tr1.append($td1a, $td1b, $td1c, $td1d);
    $('table').append($tr1);

    var $tr2 = $('<tr>');
    var $td2a = $('<td>');
    $td2a.addClass("number");
    var $btn2a = $('<button value="4">4</button>');
    $td2a.append($btn2a);

    var $td2b = $('<td>');
    $td2b.addClass("number");
    var $btn2b = $('<button value="5">5</button>');
    $td2b.append($btn2b);

    var $td2c = $('<td>');
    $td2c.addClass("number");
    var $btn2c = $('<button value="6">6</button>');
    $td2c.append($btn2c);

    var $td2d = $('<td>');
    $td2d.addClass("operator");
    var $btn2d = $('<button value="-">-</button>');
    $td2d.append($btn2d);

    $tr2.append($td2a, $td2b, $td2c, $td2d);
    $('table').append($tr2);
    //
    var $tr3 = $('<tr>');
    var $td3a = $('<td>');
    $td3a.addClass("number");
    var $btn3a = $('<button value="1">1</button>');
    $td3a.append($btn3a);

    var $td3b = $('<td>');
    $td3b.addClass("number");
    var $btn3b = $('<button value="2">2</button>');
    $td3b.append($btn3b);

    var $td3c = $('<td>');
    $td3c.addClass("number");
    var $btn3c = $('<button value="3">3</button>');
    $td3c.append($btn3c);

    var $td3d = $('<td>');
    $td3d.addClass("operator");
    var $btn3d = $('<button value="/">/</button>');
    $td3d.append($btn3d);

    $tr3.append($td3a, $td3b, $td3c, $td3d);
    $('table').append($tr3);
    //
    var $tr4 = $('<tr>');
    var $td4a = $('<td>');
    $td4a.addClass("number");
    var $btn4a = $('<button value="0">0</button>');
    $td4a.append($btn4a);

    var $td4b = $('<td id="decimal">');
    var $btn4b = $('<button value=".">.</button>');
    $td4b.append($btn4b);

    var $td4c = $('<td id="clear">');
    var $btn4c = $('<button value="c">c</button>');
    $td4c.append($btn4c);

    var $td4d = $('<td>');
    $td4d.addClass("operator");
    var $btn4d = $('<button value="*">*</button>');
    $td4d.append($btn4d);

    $tr4.append($td4a, $td4b, $td4c, $td4d);
    $('table').append($tr4);
    //
    var $tr5 = $('<tr>');
    var $td5 = $('<td colspan=5 id="sum">');
    var $btn5 = $('<button value="=">=</button>');
    $td5.append($btn5);
    $tr5.append($td5);

    $btn5.css("border", "2px solid black").height(30).width(30);
    $td5.css('border', "2px solid black").height(35).width(35);
    $('button').css("border", "2px solid black").height(30).width(30);
    $td0a.css("border", "2px solid black").height(35).width(35);
    $('table').append($tr5);
    $('table').css('margin-left', '100px');
}
