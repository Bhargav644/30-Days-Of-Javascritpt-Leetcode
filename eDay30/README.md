##  Nested Array Generator


<b>[Medium]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/nested-array-generator/description/?utm_campaign=PostD30&utm_medium=Post&utm_source=Post&gio_link_id=JoOOVj1o">Problem</a>:Given a multi-dimensional array of integers, return a generator object which yields integers in the same order as inorder traversal.<br>

A multi-dimensional array is a recursive data structure that contains both integers and other multi-dimensional arrays.<br>

inorder traversal iterates over each array from left to right, yielding any integers it encounters or applying inorder traversal to any arrays it encounters.<br>


</h4>

<br/>

<b>Input:</b>rr = [[[6]],[1,3],[]]<br>

<b>Output: </b>[6,1,3]<br>


<b>Approach 1: </b> 
<br/>

```
    //ex: [1,[2,3,4]]

    var inorderTraversal = function*(arr) {

        for(const val of arr){
            if(Array.isArray(val)){
                yield* inorderTraversal(val);  // returns full yield of 2,3,4 then yield it one by one
            }
            else{
                yield val;
            }
        }

    };


```

<br/>
<ul>
<li>Time: O(n) </li>
<li>Space: O(1) </li>
</ul>
