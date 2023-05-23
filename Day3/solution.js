
/** ---------- Solution 1 ------------ */

var createCounter = function(init) {
    let count=init;

    const increment=()=>{
        return ++count;
    }
    const decrement=()=>{
        return --count;
    }

    const reset=()=>{
        return count=init;
    }
    return {increment,decrement,reset};
};


/** ---------- Solution 2------------ */

var createCounter = function(init) {
    let count=init;
    return {
        increment:()=>{return ++count},
        decrement:()=>{return --count},
        reset:()=>{return count=init},
    }
}

/** -------- Solution 3 ------------ */

class Counter{
    constructor(init){
        this.init=init;
        this.currCount=init;
    }
    increment(){
        return ++this.currCount;
    }

    decrement(){
        return --this.currCount;
    }

    reset(){
        return this.currCount=this.init;
    }
}
var createCounter=function(init){
    return new Counter(init);
}


const counter = createCounter(5)
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4