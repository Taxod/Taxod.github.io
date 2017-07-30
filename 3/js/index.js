/*data = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
    'twenty', 'twenty_one', 'twenty_two', 'twenty_three', 'twenty_four', 'twenty_five', 'twenty_six', 'twenty_seven', 'twenty_eight', 'twenty_nine',
    'thirty', 'thirty_one', 'thirty_two', 'thirty_three', 'thirty_four', 'thirty_five', 'thirty_six', 'thirty_seven', 'thirty_eight', 'thirty_nine',
    'forty', 'forty_one', 'forty_two', 'forty_three', 'forty_four', 'forty_five', 'forty_six', 'forty_seven', 'forty_eight', 'forty_nine', 'fifty'
];*/
data = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'
]
data_row = ['.row-1', '.row-2', '.row-3', '.row-4', '.row-5', '.row-6', '.row-7', '.row-8']

var reply = -3;
$('#data').on('click', '#0', function() {
    console.log('0');
    reply = 0;
    check();
});

$('#data').on('click', '#1', function() {
    console.log('1');
    reply = 1;
    check();
});

$('#data').on('click', '#2', function() {
    console.log('2');
    reply = 2;
    check();
});

$('#data').on('click', '#3', function() {
    console.log('3');
    reply = 3;
    check();
});
$('#data').on('click', '#4', function() {
    console.log('4');
    reply = 4;
    check();
});
$('#data').on('click', '#5', function() {
    console.log('5');
    reply = 5;
    check();
});
$('#data').on('click', '#6', function() {
    console.log('6');
    reply = 6;
    check();
});
$('#data').on('click', '#7', function() {
    console.log('7');
    reply = 7;
    check();
});


$('#data').on('click', '#8', function() {
    console.log('8');
    reply = 8;
    check();
});

$('#data').on('click', '#9', function() {
    console.log('9');
    reply = 9;
    check();
});

$('#data').on('click', '#10', function() {
    console.log('10');
    reply = 10;
    check();
});

$('#data').on('click', '#11', function() {
    console.log('11');
    reply = 11;
    check();
});

$('#data').on('click', '#12', function() {
    console.log('12');
    reply = 12;
    check();
});

$('#data').on('click', '#13', function() {
    console.log('13');
    reply = 13;
    check();
});

$('#data').on('click', '#14', function() {
    console.log('14');
    reply = 14;
    check();
});

$('#data').on('click', '#15', function() {
    console.log('15');
    reply = 15;
    check();
});

$('#data').on('click', '#16', function() {
    console.log('16');
    reply = 16;
    check();
});

$('#data').on('click', '#17', function() {
    console.log('17');
    reply = 17;
    check();
});

$('#data').on('click', '#18', function() {
    console.log('18');
    reply = 18;
    check();
});

$('#data').on('click', '#19', function() {
    console.log('19');
    reply = 19;
    check();
});

$('#data').on('click', '#20', function() {
    console.log('20');
    reply = 20;
    check();
});

$('#data').on('click', '#21', function() {
    console.log('21');
    reply = 21;
    check();
});

$('#data').on('click', '#22', function() {
    console.log('22');
    reply = 22;
    check();
});

$('#data').on('click', '#23', function() {
    console.log('23');
    reply = 23;
    check();
});

$('#data').on('click', '#24', function() {
    console.log('24');
    reply = 24;
    check();
});

$('#data').on('click', '#25', function() {
    console.log('25');
    reply = 25;
    check();
});

$('#data').on('click', '#26', function() {
    console.log('26');
    reply = 26;
    check();
});

$('#data').on('click', '#27', function() {
    console.log('27');
    reply = 27;
    check();
});

$('#data').on('click', '#28', function() {
    console.log('28');
    reply = 28;
    check();
});

$('#data').on('click', '#29', function() {
    console.log('29');
    reply = 29;
    check();
});

$('#data').on('click', '#30', function() {
    console.log('30');
    reply = 30;
    check();
});

$('#data').on('click', '#31', function() {
    console.log('31');
    reply = 31;
    check();
});

$('#data').on('click', '#32', function() {
    console.log('32');
    reply = 32;
    check();
});

$('#data').on('click', '#33', function() {
    console.log('33');
    reply = 33;
    check();
});

$('#data').on('click', '#34', function() {
    console.log('34');
    reply = 34;
    check();
});

$('#data').on('click', '#35', function() {
    console.log('35');
    reply = 35;
    check();
});

$('#data').on('click', '#36', function() {
    console.log('36');
    reply = 36;
    check();
});

$('#data').on('click', '#37', function() {
    console.log('37');
    reply = 37;
    check();
});

$('#data').on('click', '#38', function() {
    console.log('38');
    reply = 38;
    check();
});

$('#data').on('click', '#39', function() {
    console.log('39');
    reply = 39;
    check();
});

$('#data').on('click', '#40', function() {
    console.log('40');
    reply = 40;
    check();
});

var getRandomColor = function() {
    r = Math.floor(Math.random() * 256); //0~255
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);
    return {
        r: r,
        g: g,
        b: b,
        rgb: 'rgb(' + r + ', ' + g + ', ' + b + ')'
    }
}

var getAnswerColor = function(color) {
    randomUseRGB = Math.floor(Math.random() * 3); //0~2
    //console.log(choosechangecolor + '+++++++++')
    r = color.r;
    g = color.g;
    b = color.b;
    minus = 100 - score * 2;
    //只更改一個色素

    if (minus < 5) {
        minus = 5;
    }

    switch (randomUseRGB) {
        case 0:
            r += (r < minus) ? minus : -minus;
            break;
        case 1:
            g += (g < minus) ? minus : -minus;
        case 2:
            b += (b < minus) ? minus : -minus;
    }

    return {
        r: r,
        g: g,
        b: b,
        rgb: 'rgb(' + r + ', ' + g + ', ' + b + ')'
    }

}

//num按鈕編號
var printBox = function() {

    var answer = Math.floor(Math.random() * 40);
    var color = getRandomColor();
    var ans_color = getAnswerColor(color);
    //行
    for (var i = 0; i < 5; i++) {
        var $row = $('<div>').attr('data-row', i)
            //個數
        for (var j = 0; j < 8; j++) {
            var index = i * 8 + j;
            var $button = $('<button>').attr('id', index).attr('class', 'item')


            if (index == answer) {
                $button.attr('data-answer', true).css('background-color', ans_color.rgb);
            } else {
                $button.attr('data-answer', false).css('background-color', color.rgb)
            }
            var $col = $row.append($button)
            $('#data').append($col)
        }
    }
}

var printhintjpg = function() {
    var hintid;
    for (var j = 0; j < 3; j++) {
        hintid = 'hint' + j;
        $jpg = $('<img>').attr('src', './picture/hint1.jpg').attr('id', hintid).attr('style', 'width:50px ; height:50px');
        $('.hint').append($jpg);

    }
}


var r1, g1, b1;
var r2, g2, b2;
var rgb1, rgb2;
var score = 0;

var choosechangecolor;


var answer;
var randomanswer = function() {
    answer = Math.floor(Math.random() * 40); //0~39
}

// $(document).ready(function() {
//     // 按start後滑動至id = data
//     $("#start").on("click", function(e) {
//         $('html, body').animate({
//             scrollTop: $("#hint").offset().top // 只需修改此處
//         }, 750); // 750是滑動的時間，單位為毫秒
//         e.preventDefault();
//     });
// });

//避免多次start
var void_restrat = 0;
$('#start').on('click', function() {
    // if (void_restrat == 0) {
    //     score = 0;
    //     document.getElementById("text").innerHTML = 'score : ' + score;
    //     randomanswer();
    // randomcolor();
    // changeColor();
    printBox();
    //     printhintjpg();
    //     void_restrat = 1;
    // } else {
    //     alert('Already Start!!!')
    // }

})

document.getElementById("text").innerHTML = 'score : ' + score;

var check = function() {
    if (reply == answer) {
        score += 1;
        for (var j = 0; j < data_row.length; j++) {
            $(data_row[j]).empty();
        }
        randomanswer();
        randomcolor();
        changeColor();
        printbox();
        document.getElementById("text").innerHTML = 'score' + score;
    } else {
        //console.log(0);
        void_restrat = 0;
        for (var j = 0; j < data_row.length; j++) {
            $(data_row[j]).empty();
        }
        hint_used = 0;
        var hintid;
        for (var j = 0; j < 3; j++) {
            hintid = '#hint' + j;
            $(hintid).remove();
        }

    }
}

var hint_used = 0;
$('#hint').on('click', function() {
    var answer_name = '#' + answer;
    $(answer_name).attr('style', 'width:70px; height:70px; font-size:20px;border-width:medium; border-style:dashed; border-width:1px; padding: 50px ;background-color:rgb' + rgb2 + ';');
    //console.log(answer_name + '!!!!!!');
    if (hint_used < 3) {
        var hintid;
        hintid = '#hint' + hint_used;
        $(hintid).attr('src', './picture/hint2.jpg').attr('style', 'width:50px ; height:50px;');
        hint_used += 1;
    } else {
        alert('提示用完了  HAHA 找不到齁')
    }

})

/*

$('#data').on('click', '#one', function() {
    var $button;
    $button = $('<button>').attr('style', 'width:50px; height:50px; font-size:20px;');
    console.log("great!");

    $('#data').append($button);
});*/

/*
var r, g, b;
var rgb;
var test = function() {
    r = 50;
    g = 100;
    b = 150;
    rgb = '(' + r + ',' + g + ',' + b + ')'
}*/