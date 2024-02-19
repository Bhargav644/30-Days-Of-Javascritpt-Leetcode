##  JSON Deep Equal


<b>[Medium]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/json-deep-equal/description/?utm_campaign=PostD17&utm_medium=Post&utm_source=Post&gio_link_id=4PKqJ0z9">Problem</a>:Given two objects o1 and o2, check if they are deeply equal.<br>

```

    For two objects to be deeply equal, they must contain the same keys, and the associated values must also be deeply equal. Two objects are also considered deeply equal if they pass the === equality check.

```

<br/>

</h4>

<br/>

<b>Input:</b> o1 = {"x":1,"y":2}, o2 = {"x":1,"y":2} <br>
<b>Output:</b>true<br>

<b>Approach 1:</b> 
<br/>

```

    var areDeeplyEqual=function(o1,o2){
        if(o1==null || o2==null){
            return o1===o2;
        }
        if(typeof o1!=typeof o2){
            return false;
        }
        if(typeof o1!=='object'){
            return false;
        }
        //array
        if(Array.isArray(o1) || Array.isArray(o2)){
            if(String(o1)!==String(o2)){
                return false;
            }
            for(let i=0;i<o1.length;i++){
                if(!areDeeplyEqual(o1[i],o2[i])){
                    return false;
                }
            }
        }
        else{
            if(Object.keys(o1).length!==Object.keys(o2).length){
                return false;
            }
            for(const i in o1){
                if(!areDeeplyEqual(o1[i],o2[i])){
                    return false;
                }
            }
        }

        return true;
    }

```

<br/>
<ul>
<li>Time: O(number of keys) </li>
<li>Space: O(1) </li>
</ul>
<hr>

