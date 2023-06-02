##  Array of Objects to Matrix  


<b>[Medium]</b>
<br/>

<hr/>

<h4><a href="https://leetcode.com/problems/json-deep-equal/description/?utm_campaign=PostD17&utm_medium=Post&utm_source=Post&gio_link_id=4PKqJ0z9">Problem</a>:Write a function that converts an array of objects arr into a matrix m.<br>

The first row m should be the column names. If there is no nesting, the column names are the unique keys within the objects. If there is nesting, the column names are the respective paths in the object separated by ".". <br>

Each of the remaining rows corresponds to an object in arr. Each value in the matrix corresponds to a value in an object. If a given object doesn't contain a value for a given column, the cell should contain an empty string "".<br>

The colums in the matrix should be in lexographically ascending order. <br>


<br/>

</h4>

<br/>

<b>Input:</b>

```

    arr = [
    {"a": 1, "b": 2},
    {"c": 3, "d": 4},
    {}
    ]

```
<b>Output: </b>

```

    [
    ["a", "b", "c", "d"],
    [1, 2, "", ""],
    ["", "", 3, 4],
    ["", "", "", ""]
    ]

```

<b>Approach 1:</b> 
<br/>

```

    var jsonToMatrix=function(arr){
        const keyset=new Set();

        for(const obj of arr){
            getKeys(obj,"");
        }

        const keys=Array.from(keyset).sort();
        const result=[keys];

        for(const obj of arr){
            const keyValues={};
            let row=[]
            getValues(obj,"",keyValues);
            
            for(const key of keys){
                if(key in keyValues){
                    row.push(keyValues[key]);
                }
                else{
                    row.push("")
                }
            }
            result.push(row)

        }

        return result;


        /** helper functions */
        function getKeys(obj,path){
            for(const key in obj){
                let newPath=(path)?`${paht}.${key}`:key;
                if(isObject(obj[key])){
                    getKeys(obj[key],newPath);
                }
                else{
                    keyset.add(newPath);
                }
            }
        }

        function getValues(obj,path,keyValues){
            for(const key in obj){
                let newPath=(path)?`${paht}.${key}`:key;
                if(isObject(obj[key])){
                    getValues(obj[key],newPath,keyValues);
                }
                else{
                    keyValues[newPath]=obj[key];
                }
            }
        }

        function isObject(obj){
            return obj!==null && typeof obj==="object";
        }
    }

```

<br/>
<ul>
<li>Time: O(number of keys) </li>
<li>Space: O(number of keys) </li>
</ul>
<hr>

