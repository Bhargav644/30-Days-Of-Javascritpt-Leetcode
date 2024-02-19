##  Convert Object to JSON String


<b>[Medium]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/json-deep-equal/description/?utm_campaign=PostD17&utm_medium=Post&utm_source=Post&gio_link_id=4PKqJ0z9">Problem</a>:Given an object, return a valid JSON string of that object. You may assume the object only inludes strings, integers, arrays, objects, booleans, and null. The returned string should not include extra spaces. The order of keys should be the same as the order returned by Object.keys(). <br>

Please solve it without using the built-in JSON.stringify method.<br>


<br/>

</h4>

<br/>

<b>Input:</b> object = {"y":1,"x":2} <br>
<b>Output:</b>{"y":1,"x":2}<br>

<b>Approach 1:</b> 
<br/>

```

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

```

<br/>
<ul>
<li>Time: O(number of keys) </li>
<li>Space: O(1) </li>
</ul>
<hr>

