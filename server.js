const express = require("express");
const app = express();

app.listen(8080, function(){
    console.log("listening on 8080")
});

app.get('/', function(요청, 응답){
    응답.sendFile('/Users/dongjun/Desktop/homepage/homepage.html')
});

app.get('/Calender', function(요청, 응답){
    응답.sendFile('/Users/dongjun/Desktop/homepage/Calender.html')
});

app.get('/Timetable', function(요청, 응답){
    응답.sendFile('/Users/dongjun/Desktop/homepage/Timetable.html')
});

app.get('/ToDo', function(요청, 응답){
    응답.sendFile('/Users/dongjun/Desktop/homepage/To_do_list.html')
});