

var headers = [];
var headerString = [];
var contents = [];
var contentString = [];

//index 0 = 1
for (let i = 1; i <= 5; i++) {
    headers[i - 1] = document.getElementById('header' + i);
    contents[i - 1] = document.getElementById('content' + i);
    headerString[i - 1] = "#header" + i;
    contentString[i - 1] = "#content" + i;
    
}



for (let i = 0; i < 5; i++) {

    $(headerString[i]).on('click', function() {
        $(contentString[i]).slideToggle("slow");
    });
  
}

