/** ---------------Solution 1-------------- */

var once = function(fn) {
    let calls=0;
    return function(...args){
        calls+=1;
        if(calls>1) return undefined;
        else{
            return fn(...args);
        }
    }
};
