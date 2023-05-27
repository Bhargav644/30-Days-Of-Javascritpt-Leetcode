##  Cache With Time Limit


<b>[Medium]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/cache-with-time-limit/description/?utm_campaign=PostD14&utm_medium=Post&utm_source=Post&gio_link_id=1P64Enz9">Problem</a>:Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.



<br/>

</h4>

<br/>

<b>Input:</b> <br>
["TimeLimitedCache", "set", "get", "count", "get"] <br>
[[], [1, 42, 100], [1], [], [1]]<br>
[0, 0, 50, 50, 150]<br>
<b>Output:</b> [null, false, 42, 1, -1]

<b>Approach 1:</b> 
<br/>

```

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

```

<br/>
<ul>
<li>Time: O(1) </li>
<li>Space: O(1) </li>
</ul>
<hr>

