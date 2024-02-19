/**-------------- Solution ---------- */

var checInstanceof=function(obj,classFunction){
    if(obj===null || obj===undefined || typeof classFunction!=="function"){
        return false;
    }

    const currPrototype=Object.getPrototypeOf(obj);

    while(currPrototype!=null){
        if(currPrototype===classFunction.prototype){
            return true;
        }
        currPrototype=Object.getPrototypeOf(currPrototype);
    }

    return false;
}

const res=checInstanceof(new Date(),Date)
console.log(res)



