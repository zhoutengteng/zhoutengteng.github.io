window.onload = function(){
    var A = 1256056504, B = 1256117187;
    var t = parseInt((B - A) / 1000);
    (function(){
        document.getElementById("time").innerHTML = t;
        if(--t >= 0){
            setTimeout(arguments.callee, 1000);
        }
    })();
}
