##  Apply Transform Over Each Element in Array
<b>[Easy]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/?utm_campaign=PostD4&utm_medium=Post&utm_source=Post&gio_link_id=noqbNOv9">Problem</a>:Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
The returned array should be created such that returnedArray[i] = fn(arr[i], i).
Please solve it without the built-in Array.map method.
<br/>

</h4>

<br/>

<b>Input</b>: arr = [1,2,3], fn = function plusone(n) { return n + 1; } <br/>
<b>Output</b>: [2,3,4]<br/>

<hr>

<b>Let's clarify how the task would have been accomplished if we had utilized a map, even though it is prohibited for this specific question.</b> <br>

```
    var map = function(arr, fn) {
        arr=arr.map(fn)
        return arr;
    };

```
<b>Note: map() does not change the original array. It will always return a new array</b> <br>



<b>Approach 1: Using simple 'for loop' and an external array to store result</b> 
<br/>

```

    var map1 = function(arr, fn) {
        let result=[];
        for(let i=0;i<arr.length;i++){
            result.push(fn(arr[i],i));
        }
        return result;
    };


```

<br/>
<ul>
<li>Time: O(n) </li>
<li>Space: O(n) </li>
</ul>
<hr>

<b>Approach 2: Using 'for loop' for updating the same array</b> 
<br/>

```

    var map2 = function(arr, fn) {
        for(let i=0;i<arr.length;i++){
            arr[i]=fn(arr[i],i);
        }
        return arr;
    };

```

<br/>
<ul>
<li>Time: O(n) </li>
<li>Space: O(1) </li>
</ul>

<hr>
<b>Approach 3: Using simple 'foreach' loop</b> 
<br/>

```

    var map3= function(arr, fn) {
        const result=[]
        arr.forEach((element,index) => {
            result.push(fn(element,index));
        });
        return result;
    };

```

<br/>
<ul>
<li>Time: O(n) </li>
<li>Space: O(n) </li>
</ul>
<hr>

<b>Approach 4: Using 'for...of' loop </b> 
<br/>

```

    var map4 = function(arr, fn) {
        let result=[];
        for(let [idx,i] of arr.entries()){
            result.push(fn(i,idx));
        }
        return result;
    };
    
    
```

<br/>
<ul>
<li>Time: O(n) </li>
<li>Space: O(n) </li>
</ul>
<hr>

<b>Approach 4: Using 'for...in' loop </b> 
<br/>

```

    var map5 = function(arr, fn) {
        let result=[],idx=0;
        for(let i in arr){
            result.push(fn(arr[i],idx++));
        }
        return result;
    };

    
```

<br/>
<ul>
<li>Time: O(n) </li>
<li>Space: O(n) </li>
</ul>
<hr>

<b>Approach 5: Using 'Array.from()' method </b> 
<br/>

```

    var map6 = function(arr, fn) {
        return Array.from(arr,(value,index)=>fn(value,index))
    };


```

<br/>
<ul>
<li>Time: O(n) </li>
<li>Space: O(1) </li>
</ul>
<hr>

<b>Approach 6: Using 'Recursion' </b> 
<br/>

```

    var map7 = function(arr, fn,index=0) {
        if(index===arr.length){
            return []
        }
        return [fn(arr[index],index),...map7(arr,fn,index+1)]
    };


```

<br/>
<ul>
<li>Time: O(n) </li>
<li>Space: O(1) or O(n) Auxilary stack space </li>
</ul>
<hr>

<b>Approach 6: Using 'Array.flatMap()' method </b> 
<br/>

```

    var map8 = function(arr, fn) {
        return arr.flatMap((value,index)=>fn(arr[index],index))
    };


```

<br/>
<ul>
<li>Time: O(n) </li>
<li>Space: O(1)  </li>
</ul>
<hr>
