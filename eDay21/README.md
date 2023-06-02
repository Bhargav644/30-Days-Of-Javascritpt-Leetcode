##  Chunk Array


<b>[Easy]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/chunk-array/description/?utm_campaign=PostD21&utm_medium=Post&utm_source=Post&gio_link_id=YoXvrdGR">Problem</a>:Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.<br>

You may assume the array is the output of JSON.parse. In other words, it is valid JSON.<br>

Please solve it without using lodash's _.chunk function.<br>

 <br>


<br/>

</h4>

<br/>

<b>Input:</b> arr = [1,2,3,4,5], size = 1 <br>
<b>Output: </b>[[1],[2],[3],[4],[5]]<br>


<b>Approach 1: Brute Force </b> 
<br/>

```

    var chunk = function(arr, size) {
        const result=[]
        let i=0;
        for(i=0;i<arr.length;i++){
            let row=[]
            let j=i;
            while(j<i+size && j<arr.length){
                row.push(arr[j]);
                j++;
            }
            i+=size-1;
            result.push(row)
        }
        return result;
    };

```

<br/>
<ul>
<li>Time: O(n*size) </li>
<li>Space: O(n) </li>
</ul>
<hr>

<b>Approach 2: Using Chunk (Not Allowed in Question) </b> 
<br/>

```
    var chunk = function(arr, size) {
        return chunk(arr, size);
    };

```

<br/>
<ul>
<li>Time: O(n*size) </li>
<li>Space: O(n) </li>
</ul>
<hr>

<b>Approach 3: Using Slice Method</b> 
<br/>

```
    vavar chunk = function(arr, size) {
        var ans = [];
        var index = 0;
    
        while (index < arr.length) {
        ans.push(arr.slice(index, index + size));
        index += size;
        }
    
        return ans;
    }


```

<br/>
<ul>
<li>Time: O(n*size) </li>
<li>Space: O(n) </li>
</ul>
<hr>

