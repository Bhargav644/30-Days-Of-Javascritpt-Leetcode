/**-------------Solution 1------------ */

var createCounter1 = function(n) {
    let count=0;
    return function() {
        return n+count++;
    };
};



/*-------------Solution 2------------ */


var createCounter2 = function(n) {
    return function() {
        return n++;
    };
};