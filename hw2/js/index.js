$('#insert').on('click', function() {
    var data = {
        name: $('#InputProductName').val(),
        price: +$('#InputProductPrice').val(),
        count: +$('#InputProductCount').val(),
        image: $('#InputProductImage').val()
    }
    $.post("http://js2017-hw2.kchen.club/insert", data, function(response) {
        if (response) {
            if (response.result) {
                $('#message').text('新增成功');
            } else {
                $('#message').text('新增失敗 (' + response.data + ')');
            }
        } else {
            $('#message').text('新增失敗');
        }
        $('#dialog').modal('show');
        console.log(response);
    }, "json");
})

$('#query').on('click', function() {
    $.get("http://js2017-hw2.kchen.club/query", function(response) {
        if (response) {
            if (response.result) {
                // TODO HW2 作業寫在這裡
                $('#product-list').empty();

                // console.log();
                var j = 1;
                for (var i = 0; i < (response.data).length; i++) {

                    var $thumb = $('<img>').attr('class', 'thumb').attr('src', response.data[i].image);
                    var $title = $('<h3>').attr('class', 'title').text(response.data[i].name);
                    var $price = $('<p>').attr('class', 'price').text('NT$ ' + response.data[i].price);
                    var $item = $('<div>').attr('class', 'item')
                    $item = $item.append($thumb);
                    $item = $item.append($title);
                    $item = $item.append($price);
                    var $col = $('<div>').attr('class', 'col-*');
                    $col = $col.append($item);
                    $('#product-list').append($col);
                    if (i % 100 == 0) {
                        var $page = $('<div>').attr('id', j);
                        $('#product-list').append($page);
                        j++
                    }


                }
                // for (var i = 0; i < 50; i++) {

                //     console.log(response.data[i].price);
                // }

            } else {
                $('#message').text('查詢失敗 (' + response.data + ')');
                $('#dialog').modal('show');
            }
        } else {
            $('#message').text('查詢失敗');
            $('#dialog').modal('show');
        }

        console.log(response);
    }, "json");
})