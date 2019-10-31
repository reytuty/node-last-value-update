const LastValueUpdate = require("./index");


var l = new LastValueUpdate(doSomething , 5000) ;
//set initial value, data can be everything
l.data = 1 ;
l.start();

function doSomething(d){
    //something like save data
    console.log(d);
    //changing data value each step
    l.data ++ ;
    l.resolved();
}


setInterval(()=>{
    //change data value more quickly then step
    l.data ++;
    l.resolved();
}, 1000) ;