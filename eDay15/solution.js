/** ------------Solution ------------- */

var debounce=function(fn,t){
    let id;
    return function(...args){
        clearTimeout(id);
        id=setTimeout(()=>fn(...args),t);
    }
}


const log=debounce(console.log,2000)
log(100)
log(200)
log(300)
