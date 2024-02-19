/**----------- Solution ---------------- */

var throttle=function(fn,t){
    let isThrottled=false;
    let nextArgs=null;
    return function(...args){
        if(isThrottled){
            nextArgs=args;
        }
        else{
            fn(...args);
            isThrottled=true;
            setTimeout(helper,t);
        }

        function helper(){
            if(nextArgs){
                fn(...nextArgs);
                nextArgs=null;
                isThrottled=true;
                setTimeout(helper,t);
            }
            else{
                isThrottled=false;
            }
        }
    }
}