##  Array Wrapper



<b>[Easy]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/array-wrapper/description/?utm_campaign=PostD28&utm_medium=Post&utm_source=Post&gio_link_id=1R3l3Q0P">Problem</a>:Create a class ArrayWrapper that accepts an array of integers in it's constructor. This class should have two features:<br>

When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.<br>
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].<br>


</h4>

<br/>

<b>Input:</b>nums = [[1,2],[3,4]], operation = "Add"<br>

<b>Output: </b>10<br>


<b>Approach 1: </b> 
<br/>

```

    var ArrayWrapper = function(nums) {
        this.nums=nums;
    };

    ArrayWrapper.prototype.valueOf = function() {
        return this.nums.reduce((n,a)=>n+a,0);
    }

    ArrayWrapper.prototype.toString = function() {
        return `[${String(this.nums)}]`;
    }  


```

<br/>
<ul>
<li>Time: O(n) </li>
<li>Space: O(n) </li>
</ul>
