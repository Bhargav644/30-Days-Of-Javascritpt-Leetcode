##  Flatten Deeply Nested Array


<b>[Medium]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/flatten-deeply-nested-array/description/?utm_campaign=PostD22&utm_medium=Post&utm_source=Post&gio_link_id=rREX6Gm9">Problem</a>:Given a multi-dimensional array arr and a depth n, return a flattened version of that array.<br>

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.<br>

``` 
    A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

```

 <br>

<b>Application</b>: Check out the below code whenever we call a function which has promise inside promise returning the inner proomise but still we got one promise to open because js automaticaly flatter it.

```
    const promise1=new Promise((resolve,reject)=>{
        resolve(1);
    })

    const promise2=promise1.then((res)=>{
        console.log(res);
        return new Promise((resolve,reject)=>{
            resolve(res+1);
        })
    })

    promise2.then((res)=>{
        console.log(res);
    })


```

<br/>

</h4>

<br/>

<b>Input:</b> arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]] , n = 1<br>
<b>Output: </b>[1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]<br>


<b>Approach 1: </b> 
<br/>

```

    var flat=function(arr,n){
        const res=[];

        function helper(arr,depth){
            for(const val of arr){
                if(depth<n && typeof val=='object'){
                    helper(val,depth+1);
                }
                else{
                    res.push(val);
                }
            }
            return res;
        }

        return helper(arr,0);
    }


```

<br/>
<ul>
<li>Time: O(n) </li>
<li>Space: O(n) </li>
</ul>

