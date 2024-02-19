/** ---------Solution------------- */

Array.prototype.groupBy = function(fn) {
    const obj={};

    for(const val of this){
        let key=fn(val);
        if(obj.hasOwnProperty(key)){
            obj[key].push(val);
        }
        else{
            obj[key]=[val]
        }
    }

    return obj;
};