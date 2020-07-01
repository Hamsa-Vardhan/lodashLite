# Lodash Lite --  Small Package with mostly needed functions

##### *Installation* -- `npm i lodash--lite`

## Functions list
 -	[flattenDepth](#flattenDepth) 
 -	[createAlpha](#createAlpha) 
 -	[isVow](#isVow) 
 -	[orderBy](#orderBy) 
 -	[timeTaken](#timeTaken) 
 -	[range](#range) 
 -	[countsInList](#countsInList) 
 -	[flow](#flow) 
 -	[factors](#factors) 
 -	[isPrime](#isPrime) 
 

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
    
    flattenDepth(array, 1);
    // => [1, 2, [3, [4]], 5]
    
    flattenDepth(array, 2);
    // => [1, 2, 3, [4], 5]
```

### createAlpha
_Stop your struggle for generating list of required alphabets_

*usage* : 

```
    createAlpha(char1,char2)
    args : 
        char1,char2 -- must be single digit characters
                        any case is accepted


    createAlpha('a','d');
    // => ['a','b','c','d']


    createAlpha('Y','D');
    // => ['Y','Z','A','B','C','D']
```


### isVow
_check if character is a vowel_


*usage* : 

```
    isVow(char)
    args : 
        char -- must be a single digit character
                any case is accepted

    isVow('a');
    // => true


    isVow('Z');
    // => false
```


### orderBy
_Sorting a list is easy but sorting a list of objects?_
*similar to orderby in sql*


*usage* : 

```
    orderBy(objList,[key1,key2],[order1,order2])
    args : 
        objList -- list of objects
        key1,key2 -- keys in each object
        order1,order2 -- values in asc or desc


    let users = [
        { 'user': 'fred',   'age': 48 },
        { 'user': 'barney', 'age': 34 },
        { 'user': 'fred',   'age': 40 },
        { 'user': 'barney', 'age': 36 }
    ];
    orderBy(users, ['user', 'age'], ['asc', 'desc']);
    // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
```


### timeTaken
_Ever needed to find time taken by your function_


*usage* : 

```
    timeTaken(fun,arguments)
    args : 
        fun -- function for which time has to be found
        arguments --  arguments that needs to go as parameters to function

    let add = (a,b) => a+b
    timeTaken(add,2,3);
    // => {time : '12ms',result : 5}

    timeTaken(console.log,'console takes this much time')
    // => {time : '6ms'}
```


### range
_From python and want to use range in loops badly_


*usage* : 

```
    range(start,end)
    args : 
        start,end -- integers and end is not included

    range(5,8) : 
    // => [5,6,7]

    range(0,-6) : 
    // [0,-1,-2,-3,-4,-5]
```


### countsInList
_Ever Wanted to find the repition of an element in list_


*usage* : 

```
    countsInList(lst)
    args : 
        lst : list in which element counts has to be calculated

    countsInList([1,2,3,4,4,3,4,2,3,4]) : 
    // => { '1': 1, '2': 2, '3': 3, '4': 4 }
```



### flow
_This can be used to connect multiple functions_


*usage* : 


```
    flow(lst,funcs)
    args :
        lst : list of arguments that are to be passed as parameters for first function
        funcs : functions that are to be connected


    let add = (a,b) => a+b
    let square = (a) => a**2
    flow([2,3],add,square)
    // => 6 => 36   // result of add is passed as input to square
```


### factors
_Gives list of factors for a given number_


*usage* : 
 

```
    factors(num)
    args : 
        num : number for which factors has to be extracted

    factors(12)
    // => [ 1, 2, 3, 4, 6, 12 ]
```


### isPrime
_Find whether a given number is prime or not_


*usage* : 

```
    isPrime(num)
    args : 
        num : number that has to be checked

    isPrime(20)
    // => false

    isPrime(7)
    // => true
```