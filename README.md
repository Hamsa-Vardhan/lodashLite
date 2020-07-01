# Lodash Lite --  Small Package with mostly needed functions

##### *Installation* -- `npm i lodashLite`

## Functions list
 -	[flattenDepth](#flattenDepth) 
 -	[createAlpha](#createAlpha) 
 -	[isVow](#isVow) 
 -	[orderBy](#orderBy) 
 -	[timeTaken](#timeTaken) 
 -	[range](#range) 
 -	[countsInList](#countsInList) 
 -	[flipObj](#flipObj) 
 -	[flow](#flow) 
 -	[factors](#factors) 
 -	[isPrime](#isPrime) 
 -	[timeTaken](#timeTaken)

### flattenDepth

_Did you ever struggle to flatten a list of lists ?_
now we have an option
*usage* :
``` 
    flattenDepth(arr,d)
    args :
        arr -- list of lists
        d -- depth  and by default is 1
        d ? is optional
   
    let array = [1, [2, [3, [4]], 5]];
    
    _.flattenDepth(array, 1);
    // => [1, 2, [3, [4]], 5]
    
    _.flattenDepth(array, 2);
    // => [1, 2, 3, [4], 5]
```
