var areaList = document.querySelector('.areaList');
areaList.addEventListener('change',function(e){
    var xhr = new XMLHttpRequest();    //產生新的網路請求
        xhr.open('get', "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97" , true);
        xhr.send(); //傳送()
        xhr.onload = function () {  //當資料回傳時才執行底下程式
    var data = JSON.parse(xhr.responseText);
    var selectValue = e.target.value;
    var str = "<h2>"+selectValue+"</h2>";
    for(var i=0;data.result.records.length>i;i++){
        if(selectValue==data.result.records[i].Zone){
            str += "<li><div class='info'><img class='photo' src='"+data.result.records[i].Picture1+"'>";
            str += "<div class='name'>"+data.result.records[i].Name+"</div>";
            str += "<span class='area'>"+data.result.records[i].Zone+"</span></div>";
            str += "<p><img class='iconOpen' src='https://hexschool.github.io/JavaScript_HomeWork/assets/icons_clock.png'>"+data.result.records[i].Opentime+"</p>";
            str += "<p><img class='iconAdd' src='https://hexschool.github.io/JavaScript_HomeWork/assets/icons_pin.png'>"+data.result.records[i].Add+"</p>";
            str += "<p><img class='iconTel' src='https://hexschool.github.io/JavaScript_HomeWork/assets/icons_phone.png'>"+data.result.records[i].Tel+"</p>";
            str += "<span><img class='iconTicket' src='https://hexschool.github.io/JavaScript_HomeWork/assets/icons_tag.png'>"+data.result.records[i].Ticketinfo+"</span></li>";
        } 
    }
        str += "<div class='clear'></div>";
        document.querySelector('.attractions').innerHTML = str;
    }
} ) 
function zone(select){
    var xhr = new XMLHttpRequest();
        xhr.open('get', "https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97");
        xhr.send();
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            var str = "<h2>"+select+"</h2>";
            for(var i =0;data.result.records.length>i;i++){
             if(data.result.records[i].Zone == select){
                str += "<li><div class='info'><img class='photo' src='"+data.result.records[i].Picture1+"'>";
                str += "<div class='name'>"+data.result.records[i].Name+"</div>";
                str += "<span class='area'>"+data.result.records[i].Zone+"</span></div>";
                str += "<p><img class='iconOpen' src='https://hexschool.github.io/JavaScript_HomeWork/assets/icons_clock.png'>"+data.result.records[i].Opentime+"</p>";
                str += "<p><img class='iconAdd' src='https://hexschool.github.io/JavaScript_HomeWork/assets/icons_pin.png'>"+data.result.records[i].Add+"</p>";
                str += "<p><img class='iconTel' src='https://hexschool.github.io/JavaScript_HomeWork/assets/icons_phone.png'>"+data.result.records[i].Tel+"</p>";
                str += "<span><img class='iconTicket' src='https://hexschool.github.io/JavaScript_HomeWork/assets/icons_tag.png'>"+data.result.records[i].Ticketinfo+"</span></li>";
            }
           }
           str += "<div class='clear'></div>";
           document.querySelector('.attractions').innerHTML = str;
          
         }
}