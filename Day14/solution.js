const TimeLimitCache=function(){
    this.cache=new Map();
}

TimeLimitCache.prototype.set=function(key,value,duration){
    const alreadyExists=this.cache.get(key);
    if(alreadyExists){
        clearInterval(alreadyExists.timeoutId);
    }

    const timeoutId=setInterval(()=>{
        this.cache.delete(key);
    },duration);

    this.cache.set(key,{value,timeoutId});

    return Boolean(alreadyExists);
}

TimeLimitCache.prototype.get=function(key){
    if(this.cache.has(key)){
        return this.cache.get(key);
    }
    return -1;
}

TimeLimitCache.prototype.count=function(){
    return this.cache.size();
}




var obj = new TimeLimitedCache()  //new keyword is used that this keyword can be used
obj.set(1, 42, 1000); // false
obj.get(1) // 42
obj.count() // 1