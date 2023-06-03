##  Group By


<b>[Medium]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/group-by/description/?utm_campaign=PostD24&utm_medium=Post&utm_source=Post&gio_link_id=WoM5GZKo">Problem</a>:Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.<br>
A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.
 <br>


</h4>

<br/>

<b>Input:</b><br>

```
    array = [
        {"id":"1"},
        {"id":"1"},
        {"id":"2"}
    ], 
    fn = function (item) { 
        return item.id; 
    }

```

<b>Output: </b><br>

```
    { 
        "1": [{"id": "1"}, {"id": "1"}],   
        "2": [{"id": "2"}] 
    }

```


<b>Approach 1: </b> 
<br/>

```

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


```

<br/>
<ul>
<li>Time: O(n) </li>
<li>Space: O(n) </li>
</ul>
