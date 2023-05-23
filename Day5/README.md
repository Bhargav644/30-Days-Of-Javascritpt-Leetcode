##  Filter Elements from Array

<b>[Easy]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/filter-elements-from-array/description/">Problem</a>:Given an integer array arr and a filtering function fn, return a new array with a fewer or equal number of elements.<br>

The returned array should only contain elements where fn(arr[i], i) evaluated to a truthy value.<br>

Please solve it without the built-in Array.filter method.<br>


<br/>

</h4>

<br/>

<b>Input</b>: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; } <br>
<b>Output</b>:[20,30]<br/>
<hr>
<hr>

<b>Approach 1:</b> 
<br/>

```

    var filter = function(arr, fn) {
        let number=[]
        for(let i=0;i<arr.length;i++){
            if(fn(arr[i],i)){
                number.push(arr[i]);
            }
        }

        return number;
    };


```

<br/>
<ul>
<li>Time: O(n) </li>
<li>Space: O(n) </li>
</ul>
<hr>

<b>Approach 2:</b> 
<br/>

```

    var filter=function(arr,fn){
        return arr.reduce((result,value,index)=>{
            if(fn(value,index)){
                result.push(value);
            }
            return result;
        },[])   //empty bracket depicts intial value to result
    }


```

<br/>
<ul>
<li>Time: O(n) </li>
<li>Space: O(n) </li>
</ul>

<hr>

<b>Approach 3:</b> 
<br/>

```

    var filter = function(arr,fn){
        return arr.flatMap((i,j)=> fn(i,j)?[i]:[]);
    }


```

<br/>
<ul>
<li>Time: O(n) </li>
<li>Space: O(n) </li>
</ul>