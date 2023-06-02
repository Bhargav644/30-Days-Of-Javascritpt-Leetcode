##  Differences Between Two Objects


<b>[Medium]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/differences-between-two-objects/description/?utm_campaign=PostD20&utm_medium=Post&utm_source=Post&gio_link_id=LPdzgyA9">Problem</a>:Write a function that accepts two deeply nested objects or arrays obj1 and obj2 and returns a new object representing their differences.

 <br>


<br/>

</h4>

<br/>

<b>Input:</b>

```

    obj1 = {
        "a": 1,
        "v": 3,
        "x": [],
        "z": {
            "a": null
        }
    }
    obj2 = {
        "a": 2,
        "v": 4,
        "x": [],
        "z": {
            "a": 2
        }
    }

```
<b>Output: </b>

```

    {
    "v": [6, 7],
    "z": {
            "2": [4, 3],
            "3": {
            "0": [2, 1]
            }
        }
    }

```


<b>Approach 1:</b> 
<br/>

```

    function objDiff(obj1, obj2) {
    
        if(!isObject(obj1) && !isObject(obj2)){
            return obj1===obj2?{}:[obj1,obj2];
        }
        if(!isObject(obj1) || !isObject(obj2)){
            return [obj1,obj2];
        }
        if(Array.isArray(obj1)!==Array.isArray(obj2)){
            return [obj1,obj2];
        }

        const diff={}
        for(const key in obj1){
            if(obj2.hasOwnProperty(key)){
                const res=objDiff(obj1[key],obj2[key]);
                if(Object.keys(res).length>0){
                    diff[key]=res;
                }
            }
        }

        return diff;

        function isObject(obj){
            return obj!==null && typeof obj==="object";
        }

    };

```

<br/>
<ul>
<li>Time: O(number of keys) </li>
<li>Space: O(number of keys) </li>
</ul>
<hr>

