/**---------- Solution -------------- */
var jsonStringify = function(object) {
    if(object==null) return null;
    else if(Array.isArray(object)){
        let str='['
        object.forEach((val,idx)=>{
            str+=jsonStringify(val);
            if(idx!=object.length-1) str+=',';
        })
        str+=']';
        return str;
    }
    else if(typeof object=="object"){
        let str='{'
        let keys=Object.keys(object);
        keys.forEach((val,idx)=>{
            str+=`"${val}":`;
            str+=jsonStringify(object[val]);
            if(idx!=keys.length-1) str+=',';
        })
        str+='}';
        return str;
    }
    else if(typeof object=="string") return `"${object}"`;
    else return object;
};