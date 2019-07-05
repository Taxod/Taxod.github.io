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
var str = ''
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
    str = ''
    $('#answer').val(str);
    name1 = n
    str = name1 + " "
    $('#answer').val(str);
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
        $("#one").show();
        $("#two").show();
        $("#three").show();
        $("#four").show();
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
        $("#one").show();
        $("#two").hide();
        $("#three").hide();
        $("#four").hide();
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
        $("#one").show();
        $("#two").hide();
        $("#three").hide();
        $("#four").hide();
    }
}

function definenumber(num) {
    number1 = num
    str = str + number1 + "\n"
    $('#answer').val(str);
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
                    str = str + type1 + ':' + doc.data()[type1] + "\n"
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
                for (index in doc.data()) {
                    str = str + getKeyByValue(doc.data(), doc.data()[index]) + ":" + doc.data()[index] + "\n"
                    console.log(doc.data()[index])
                    console.log(str)
                }
                $('#answer').val(str);
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