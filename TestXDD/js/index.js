//儲存數字
var data = [];
//儲存方法
var method = [];
//顯示字串
var p = '';
//紀錄數字
var q = '';
//變換
var i = 0;
var j = 0;

$('#one').on('click', function() {
    var n = '1';
    q = q + n;
    p = p + n;
    $('#number').val(p);
});
$('#two').on('click', function() {
    var n = '2';
    p = p + n;
    q = q + n;
    $('#number').val(p);
});
$('#three').on('click', function() {
    var n = '3';
    q = q + n;
    p = p + n;
    $('#number').val(p);
});

$('#four').on('click', function() {
    var n = '4';
    q = q + n;
    p = p + n;
    $('#number').val(p);
});

$('#five').on('click', function() {
    var n = '5';
    q = q + n;
    p = p + n;
    $('#number').val(p);
});

$('#six').on('click', function() {
    var n = '6';
    q = q + n;
    p = p + n;
    $('#number').val(p);
});

$('#seven').on('click', function() {
    var n = '7';
    q = q + n;
    p = p + n;
    $('#number').val(p);
});

$('#eight').on('click', function() {
    var n = '8';
    q = q + n;
    p = p + n;
    $('#number').val(p);
});

$('#nine').on('click', function() {
    var n = '9';
    q = q + n;
    p = p + n;
    $('#number').val(p);
});

$('#zero').on('click', function() {
    var n = '0';
    q = q + n;
    p = p + n;
    $('#number').val(p);
});

$('#plus').on('click', function() {
    data[i] = Number(q);
    i = i + 1;
    method[j] = 1;
    j += 1;
    q = '';
    p = p + '+';
    $('#number').val(p);
});

$('#minus').on('click', function() {
    data[i] = Number(q);
    i = i + 1;
    method[j] = 2;
    j += 1;
    q = '';
    p = p + '-';
    $('#number').val(p);
});

$('#times').on('click', function() {
    data[i] = Number(q);
    i = i + 1;
    method[j] = 3;
    j += 1;
    q = '';
    p = p + '×';
    $('#number').val(p);
});

$('#divide').on('click', function() {
    data[i] = Number(q);
    i = i + 1;
    method[j] = 4;
    j += 1;
    q = '';
    p = p + '÷';
    $('#number').val(p);
});


//剩下p的部分需要處理
/*$('#sqrt').on('click', function() {
    data[i] = Number(Math.sqrt(q));
    p = p.replace(/q/i, "")
    p = p + '√' + q;
    i = i + 1;
    q = '';
    $('#number').val(p);
});*/

$('#factorial').on('click', function() {
    var s = 1;
    for (var pm = 1; pm <= Number(q); pm++) {
        s = s * pm
    }
    //data[i] = s;
    //i = i + 1;
    p = p + '!';
    q = s;
    s = 1;
    $('#number').val(p);
});



$('#ruin').on('click', function() {
    data = [];
    method = [];
    p = '';
    q = '';
    i = 0;
    j = 0;
    $('#number').val(0);
});

/*
$('#Calculation').on('click', function() {
    data[i] = Number(q);
    var ans = 0;
    ans = data[0];
    var x = data.length;
    for (var k = 0; k < x; k++) {
        if (method[k] == 1) {
            ans += data[k + 1];
        } else if (method[k] == 2) {
            ans -= data[k + 1];
        } else if (method[k] == 3) {
            ans = ans * data[k + 1];
        } else if (method[k] == 4) {
            ans = ans / data[k + 1];
        }
    }
    $('#answer').val(ans);
    //初始化
    data = [];
    method = [];
    p = '';
    q = '';
    i = 0;
    j = 0;
    $('#number').val(0);
});*/

$('#Calculation').on('click', function() {
    data[i] = Number(q);
    var ans = 0;
    var x = data.length;
    for (var k = 0; k < x; k++) {
        if (method[k] == 3) {
            data[k] = data[k] * data[k + 1];
            data.splice(k + 1, 1);
            method.splice(k, 1);
            k -= 1;
            /*data[k + 1] = data[k];
            console.log(data);*/
        } else if (method[k] == 4) {
            data[k] = data[k] / data[k + 1];
            data.splice(k + 1, 1);
            method.splice(k, 1);
            k -= 1;
            /*data[k + 1] = data[k];
            console.log(data);*/
            //data[k + 1] = 0;
        } else {
            continue;
        }
    }
    ans = data[0];

    for (var k = 0; k < x; k++) {
        if (method[k] == 1) {
            ans += data[k + 1];
            //console.log(ans);
        } else if (method[k] == 2) {
            ans -= data[k + 1];
            //console.log(ans);
        } else if (method[k] == 3) {
            //ans = ans + data[k + 1];
            //console.log('xddd');
            continue;
        } else if (method[k] == 4) {
            //ans = ans + data[k + 1];
            //console.log('xddd');
            continue;
        }
    }
    $('#answer').val(ans);
    //初始化
    data = [];
    method = [];
    p = '';
    q = '';
    i = 0;
    j = 0;
    $('#number').val(0);
});