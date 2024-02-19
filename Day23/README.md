##  Array Prototype last


<b>[Easy]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/array-prototype-last/description/?utm_campaign=PostD23&utm_medium=Post&utm_source=Post&gio_link_id=GR434na9">Problem</a>:GWrite code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

 <br>


</h4>

<br/>

<b>Input:</b> nums = [1,2,3]<br>
<b>Output: </b>3<br>


<b>Approach 1: Brute Force </b> 
<br/>

```

    Array.prototype.last=function(){
        return this.length==0?-1:this[this.length-1];   //returns 3 for [1,2,3]
    }


```

<br/>
<ul>
<li>Time: O(1) </li>
<li>Space: O(1  ) </li>
</ul>

<hr>


<b>Approach 1: Using Slice method : It always creates new array </b> 
<br/>

```

    Array.prototype.last=function(){
        return this.length==0?-1:this.slice(-1);    // returns [3] for [1,2,3]
    }


```

<br/>
<ul>
<li>Time: O(n) </li>
<li>Space: O(1) </li>
</ul>
