# node-last-value-update

JS class to update last value on max frequency to not stress some call or update on out, but do not need to handler this on in.

## Instalation

```
npm i --save node-last-value-update
```

## Exemple

```
const LastValueUpdate = require("node-last-value-update");

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

```

## Explanation

If you have many updates of values to update but need to set an stable frequency to set this value like this:

```

IN:
    ms  |   value
    0   ,   a
    1   ,   b
    20  ,   c
    50  ,   d
    90  ,   e

if you configure to frequency 50ms you will get that out

OUT
    ms  |   value
    0   ,    a
    50  ,    d
    100 ,    e
    150 ,    e
    ...

if you configure to 100ms 

OUT
    ms  |   value
    0   ,   a
    100 ,   e

```

# Methods

## start

```
var l = new LastValueUpdate(doSomething , 5000) ;
l.data = {a:1,b:2} ;
l.start();
```

## stop

```
var l = new LastValueUpdate(doSomething , 5000) ;
l.data = false ;
l.start();
l.stop() ;
```

# Extra

More details see https://www.npmjs.com/package/node-arm-refresh-in-time

## Just on Change

If you need to call method just on value change you will need other lib called DispatchMessage2Listeners

https://www.npmjs.com/package/dispatch-message-to-listeners

