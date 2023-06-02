/**---------------Solution ------------------ */

var jsonToMatrix=function(arr){
    const keyset=new Set();

    for(const obj of arr){
        getKeys(obj,"");
    }

    const keys=Array.from(keyset).sort();
    const result=[keys];

    for(const obj of arr){
        const keyValues={};
        let row=[]
        getValues(obj,"",keyValues);
        
        for(const key of keys){
            if(key in keyValues){
                row.push(keyValues[key]);
            }
            else{
                row.push("")
            }
        }
        result.push(row)

    }

    return result;


    /** helper functions */
    function getKeys(obj,path){
        for(const key in obj){
            let newPath=(path)?`${paht}.${key}`:key;
            if(isObject(obj[key])){
                getKeys(obj[key],newPath);
            }
            else{
                keyset.add(newPath);
            }
        }
    }

    function getValues(obj,path,keyValues){
        for(const key in obj){
            let newPath=(path)?`${paht}.${key}`:key;
            if(isObject(obj[key])){
                getValues(obj[key],newPath,keyValues);
            }
            else{
                keyValues[newPath]=obj[key];
            }
        }
    }

    function isObject(obj){
        return obj!==null && typeof obj==="object";
    }
}


const arr = [
    {"a": 1, "b": 2},
    {"c": 3, "d": 4},
    {}
]

console.log(jsonToMatrix(arr))