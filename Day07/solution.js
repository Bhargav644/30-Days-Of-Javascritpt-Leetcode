/**-------- Solution 1----------- */
var compose = function(functions) {
	return function(x) {
        for(let i=functions.length-1;i>=0;--i){
            x=functions[i](x)
        }
        return x;
    }
};

/** -----------Solution 2---------- */


var compose=function(functions){
    return function(x){
        return functions.reduceRight((acc,fn,i)=>{
            acc=fn(acc)
            return acc;
        },x)
    }
}

const functions=[x => x + 1, x => x * x, x => 2 * x]
console.log(compose(functions)(4))