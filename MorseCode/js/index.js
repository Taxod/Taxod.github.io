var MORSE_CODE_DICT = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..',
    '1': '.----',
    '2': '..---',
    '3': '...--',
    '4': '....-',
    '5': '.....',
    '6': '-....',
    '7': '--...',
    '8': '---..',
    '9': '----.',
    '0': '-----',
    ',': '--..--',
    '.': '.-.-.-',
    '?': '..--..',
    '/': '-..-.',
    '-': '-....-',
    '(': '-.--.',
    ')': '-.--.-'
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

function encode(params) {
    var string = "";
    params = params.toUpperCase();
    for (var i = 0; i < params.length; i++) {
        if (params[i] != " ") {
            string += MORSE_CODE_DICT[params[i]];
            string += " ";
        } else {
            string += " ";
        }
    }
    console.log(string);
    return string;
}



function decode(params) {
    var string = "";
    var temp = params.split(' ');
    console.log(temp);
    var string = "";
    for (var i = 0; i < temp.length; i++) {
        if (temp[i] == "") {
            string += " ";
        } else {
            string += getKeyByValue(MORSE_CODE_DICT, temp[i]);
        }

    }
    console.log(string);
    return string;
}



$('#ruin').on('click', function() {
    $('#number').val("")
    $('#answer').val("")
});

$('#Calculation').on('click', function() {
    var letters = /^[.-\s]+$/;
    if ($('#number').val().match(letters)) {
        $('#answer').val(decode($('#number').val()));
    } else {
        $('#answer').val(encode($('#number').val()));
    }
});