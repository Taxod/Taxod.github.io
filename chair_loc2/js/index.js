var firebaseConfig = {
    apiKey: "AIzaSyCUTAHmKQRR9gzyoBzetRlXJ4I0f0TnanQ",
    authDomain: "test-76ed2.firebaseapp.com",
    databaseURL: "https://test-76ed2.firebaseio.com",
    projectId: "test-76ed2",
    storageBucket: "",
    messagingSenderId: "15151381510",
    appId: "1:15151381510:web:2eaeb4db95265a63"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

var name1 = ''
var number1 = ''
var type1 = ''

// $("#treasure").hide();
// $("#split").hide();
// $("#小便斗").hide();
// $("#蹲式馬桶").hide();
// $("#坐式馬桶").hide();
// $("#水龍頭").hide();
// $("#主題").hide();
// $("#大小").hide();
// $("#形狀").hide();
// $("#QRcode").hide();


function definename(n) {
    name1 = n
    console.log(name1)
    if (name1 == 'chair') {
        $("#treasure").show();
        $("#split").show();
        $("#小便斗").hide();
        $("#蹲式馬桶").hide();
        $("#坐式馬桶").hide();
        $("#水龍頭").hide();
        $("#主題").hide();
        $("#大小").hide();
        $("#形狀").hide();
        $("#QRcode").hide();
    } else if (name1 == '男廁') {
        $("#treasure").hide();
        $("#split").hide();
        $("#小便斗").show();
        $("#蹲式馬桶").show();
        $("#坐式馬桶").show();
        $("#水龍頭").show();
        $("#主題").hide();
        $("#大小").hide();
        $("#形狀").hide();
        $("#QRcode").hide();
    } else {
        $("#treasure").hide();
        $("#split").hide();
        $("#小便斗").hide();
        $("#蹲式馬桶").hide();
        $("#坐式馬桶").hide();
        $("#水龍頭").hide();
        $("#主題").show();
        $("#大小").show();
        $("#形狀").show();
        $("#QRcode").show();
    }
}

function definenumber(num) {
    number1 = num
    console.log(number1)
}


function definetype(params) {
    type1 = params

    console.log(type1)
    getdata()
}

function getdata() {
    var docRef = db.collection(name1).doc(number1);
    docRef.get().then(function(doc) {
            if (doc.exists) {
                if (doc.data()[type1] == undefined) {
                    $('#answer').val("no define");
                } else {
                    var str = ''
                    str = name1 + "\n" + type1 + ':' + doc.data()[type1]
                    $('#answer').val(str);
                }
                console.log(doc.data()[type1])
            } else {
                console.log("找不到文件");
                $('#answer').val("no define");
            }
        })
        .catch(function(error) {
            console.log("提取文件時出錯:", error);
        });
}

function getdataall() {
    var docRef = db.collection(name1).doc(number1);
    docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log(doc.data());
                var string = name1 + "\n"
                for (index in doc.data()) {
                    string = string + getKeyByValue(doc.data(), doc.data()[index]) + ":" + doc.data()[index] + " \n"
                    console.log(doc.data()[index])
                    console.log(string)
                }
                $('#answer').val(string);
            } else {
                console.log("找不到文件");
                $('#answer').val("no define");
            }
        })
        .catch(function(error) {
            console.log("提取文件時出錯:", error);
        });
}

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}




$('#ruin').on('click', function() {
    $('#number').val("")
    $('#answer').val("")
});

// $('#Calculation').on('click', function() {
//     var letters = /^[.-\s]+$/;
//     if ($('#number').val().match(letters)) {
//         $('#answer').val(decode($('#number').val()));
//     } else {
//         $('#answer').val(encode($('#number').val()));
//     }
// });
