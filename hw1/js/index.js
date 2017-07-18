// 請 jQuery 抓 button 元件，並且設定當 click 事件發生後，要執行的程式碼
$('button').on('click', function() {
    // 取得體重的input
    var w = $('#weight').val()
        // 取得身體的input
    var h = $('#height').val()
        // 將取得的體重轉成數字
    w = Number(w)
        // 將取得的身高轉成數字並且轉換成公尺單位
    h = Number(h) / 100
        // 計算 h 的平方
    hh = h * h
        // 計算 bmi
    bmi = w / hh
        // 將計算結束顯示在 id=result 的元件上
    $('#result').val(bmi)
})