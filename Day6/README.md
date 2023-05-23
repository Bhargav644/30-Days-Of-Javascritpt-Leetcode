##  Array Reduce Transformation


<b>[Easy]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/array-reduce-transformation/description/?utm_campaign=PostD6&utm_medium=Post&utm_source=Post&gio_link_id=nPN45jD9">Problem</a>:Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.<br>

A reduced array is created by applying the following operation: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The final value of val is returned.<br>

If the length of the array is 0, it should return init.<br>

Please solve it without using the built-in Array.reduce method.<br>


<br/>

</h4>

<br/>

<b>Input:</b>nums = [1,2,3,4] <br>
fn = function sum(accum, curr) { return accum + curr; }<br>
init = 0<br>
<b>Output/:</b> 10<br>

<hr>
<hr>

<b>Approach 1:</b> 
<br/>

```

    var reduce = function(nums, fn, init) {
        let acc = init;
        for (let i = 0; i < nums.length; i++) {
        acc = fn(acc, nums[i]);
        }
        return acc;
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

    var reduce = function(nums, fn, init) {
        return nums.reduce((count,value,idx)=>{
            count=fn(count,value);
            return count;
        },init);
    };


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

    var reduce = function(nums, fn, init) {
        let acc = init;
        nums.forEach((element) => {
        acc = fn(acc, element);
        });
        return acc;
    };


```

<br/>
<ul>
<li>Time: O(n) </li>
<li>Space: O(n) </li>
</ul>