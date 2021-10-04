# AlgoCasts

Companion repo to [The Coding Inteview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)


# 1. String reversal: #

solution 1: Unoptimised

function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join();
}

for (i=0; i< str.length; i++){

}

// we'll take a string, turn it into an array by calling split function on it. Reduce is used to take all different values within an array and merge them to a single array.

```
var str = "Shubham";

function reverse(str){
    str.split("").reduce((initValue, currentValue) => {
        initValue + currentValue
    }, "")
}

```

# 2. Palindrome: #

Solution 1:

```
var str = "abba"
 function palindrome (str){
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// true
```

# 3. Reversing an Integer #

Solution 1:

```
function reverseInt (num){
    return num.toString().split('').reverse().join('');
}
reverseInt(12345);
```

Improvement to this solution:

for preserving the -ve sign, do add a check: 
if(n>0){
    return parseInt(reversed) * -1
}


# 3. Max Character #

Eg: maxChar("abbbbbbbc") === "b"
    maxChar("ab]bbbb]]]]]]bbc") === "]"

Common String questions: 
1. What is the most common character in the string? 
2. Does the string A have the same characters as string B?
3. Does the given string have any repeated characters in it?

In questions like this, we'll convert these strings into objects. Key will be characters and it's value as the number of times it's appearing.

We'll iterate through this string and add that characters to the object.

Converting strings to object: 
1. Split string into an array and then use for-each or for-of to loop over characters. 

```
let string = "Hello ShubHam"; 
let chars = {};

for(let char of string){
  chars[char] = chars[char] +1 || 1

  // {"H":2,"e":1,"l":2,"o":1," ":1,"a":2,"n":2}
}

```

```

function maxChar(str){
    const charMap = {};
    var max = 0;
    var maxChar = "";

    for (let char of str){         //for iterating array
        if( charMap[char] ){
            charMap[char]++ ;
        } else {
            charMap[char] = 1;
        }
    }
    for(char in charMap){          //for iterating object
        if (charMap[char] > max ){
            max = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
    
}

```

# 4. Fizz Buzz #

Write a program that console logs the numbers from 1 to n. But for multiples of three print
“fizz” instead of the number and for the multiples of five print “buzz”. For numbers which are multiples
of both three and five print “fizzbuzz”.

Example:
  fizzBuzz(5);
  1
  2
  fizz
  4
  buzz


```
var n = 10;
function fizbuzz(n){
    for(let i=0; i <= n; i++){
        if(i %3 ==0){
            console.log("fizz")
        }
        else if (i%5 ==0){
            console.log("buzz")
        }
        else if(i%3 ==0 && i%5 == 0){
            console.log("fizzBuzz");
        }
        else{
            console.log(i);
        }
    }
};
fizbuzz(n);

```

# 5. Chunk of Array #

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size
--- Examples
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


```


```








    JS Primitive types:
1. string
2. boolean
3. null
4. undefined
5. number
6. symbol

Anything that's not a primitive type is called an object.


NOTE: for-of loop is used to loop array and for-in loop is used to loop objects.

-----------------------------------------------------


Key js array methods:

# 1. map() #
```javascript
    const arr=[1,2,3,4]
        undefined
    arr.map(el => el +1)
        (4)Â [2, 3, 4, 5]
    arr
        (4) [1, 2, 3, 4]
```
    It does not changes the original array, it does operations on an array in a immutable way.

-----------------------------------------------------

# 2. filter() #

Browser Console Output

```javascript

const myArray = [1,3,5,7,9]
> undefined
............................
myArray.filter(el => el > 4)
> (3)  [5,7,9]
............................
myArray
> (5) [1,3,5,7,9]
```
............................
By the above example, we got that array filter() takes a function as argument and returns the elements according to the condition. Anything which returns true, it'll keep in the new Array.
It does it immutably.

-----------------------------------------------------


# 3. reduce() #

Reduce() helper function takes 2 arguments: 
 1. arrow function/ callback function: 
    1st argument: previousValue 
    2nd argument: currentValue 

 2. initial value for previousValue 


reduce() runs on each element of an array and runs the callback function 1 time on each element of array.  

```

const numbers = [1, 2 , 3, 4 , 5];

const sum = numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
}, 0)

// 15

```



-----------------------------------------------------

# 4. find() #



-----------------------------------------------------

# 5. includes() #


Browser Console Output
Example1::
..............................
```javascript

 const myArray = [1,2,3,4,5];
 > undefined
..............................
myArray.includes(3)
> true
<because it exists in the array>
..............................
myArray.includes(9)
> false
// <because it doesnt exists in the array>
```
..............................
Example2:: 2nd argument it takes is INDEX from which it should start searching.
...........................................
```javascript
const myArray = [ {id:1}, {id:2}, {id:3} ]
> undefined
...........................................
myArray.includes(2,3)
> false
//<means check for 2 if it exists after index[3]>
```

-----------------------------------------------------

# Promise #

Async event handling--> fetch and async await
Eg:
```javascript
    getUser('facebook/userId', (user, error)=>{
        if(error){
            throw(error)
        }
        const userId = user.id
        getFriends(userId, (friends, error) => {
            if(error){
                throw(error)
            }
            const john = friends.find(//...)
            getPosts(john, (posts, error) => {
                if(error){
                    throw(error)
                }
                const recentPost = posts[0];
                getCommentsForPost(recentPost, (comments, error) =>{
                    if(error){
                        throw(error)
                    }
                    displayComments(comments);
                });
            })
        })
    })
```

The above approach is called callback approach which is very hard to debug. So, as an alternate, promises are introduced. It's aim is to exprapolate out a lot of the stuff. ALL the FUNCTIONS above are SYNCHRONOUS functions. Each one depends on the result and return of the previous one.

```javascript
const myPromise= new Promise((resolve, reject)) => {
    setTimeout(() =>{
        resolve('I have succeeded');
    }, 1000);
});
myPromise.then(value => console.log(value));
//after 1 sec, it will console log: "I have succeeded"
```

What if the promise fails?
Catch the reject value.

```javaScript

    const myPromise= new Promise((resolve, reject)) => {
        if(true){
            console.log("I have failed")
        }
        setTimeout(() =>{
            resolve('I have succeeded');
        }, 1000);
    });
    myPromise
        .then(value => console.log(value))
        .catch(rejectValue => console.log(value));
    // After 1 sec, it will console log: "I have failed"
```
We can chain the ```javascript .then ``` as well.
```javascript

    .then(value => console.log(value +'It is good'))
    .then(newValue => console.log(newValue))
    .catch(rejectValue => console.log(value));
```

JavaScript fetch(), which is used for making API calls make use of promises to resolve and reject the network calls.

```javaScript

    fetch("https://jsonplaceholder.typicode/posts")
        .then(response => response.json())
        .then(console.log(json))
```

.......................................

Objects in JS:

```javaScript

const symbols = {
    yt: "YouTube",
    ig: "Instagram",
    fb: "Facebook"
}
```

## for accessing the keys in Object: ##

```javaScript

const symbols = {
    yt: "YouTube",
    ig: "Instagram",
    fb: "Facebook"
}

for ( const n in symbols ){
    console.log(n)
}

```


## for accessing the Values in Object: ##

```javaScript

const symbols = {
    yt: "YouTube",
    ig: "Instagram",
    fb: "Facebook"
}

for ( const n in symbols ){
    console.log(symbol[n]);
}

```



-----------------------------------------------------

# Objects In JS: #

https://cognizant.udemy.com/course/understand-javascript/learn/lecture/2237512#overview

```javaScript
var person = new Object();

person["firstname"]= "Shubham";
person["lastname"] = "Kushwaha";

var firstNameProperty = "firstname";

console.log(person); // object{firstname:'Shubham',lastname:"Kushwaha"}
console.log(person[firstNameProperty]); // Shubham

person.address = new Object();
person.address.street = "RIE";
person.address.city = "BHOPAL";


console.log(person.firstname); // Shubham
console.log(person.address.city) // BHOPAL
console.log(person["address"]["city"]) // BHOPAL

```

## Object declaration using Object literal: ##

```javaScript

var person = {
    firstname: "Shubham",
    address:{
        street: "RIE",
        city: "Bhopal"
    }
};
console.log(person);

```

### Passing object to a function ###

```javaScript
var shubham = {
    firstname: "Shubham",
    address:{
        street: "RIE",
        city: "Bhopal"
    }
}

function greet(person){
    console.log("Hi" + person.firstname)
};

greet(shubham);
greet({firstname:"Mary", lastname: "Doe"});
```

## Object Oriented JS and Prototypal Inheritance ##

What is inheritance?

One object gets access to the properties and methods of another object.


Classical Inheritance:

-   Constructors
-   friend
-   protected
-   private
-   interface etc.

Prototypal Inheritance:
1. flexible
2. extensible
3. easy to understand

Eg; if an object onj is having 2 properties:
1. prop1
2. proto 
Proto is having prop2 and proto
proto is having another proto having property prop3.

How to access it? obj.prop1 , obj.prop2 , obj.prop3 ...
If it doesn't gets it directly, it will try to search it in its proto.

This is called PROTOTYPE CHAIN.

Don't confuse with scope chain.

The scope chain is about looking for where we have access to a variable.

Eg: If we need to go to prop3, we need not to call it like this: obj.proto.proto.prop3 . We just need to write obj.props3 

Lets assume we have another object obj2 pointing to same proto of obj . We can access it like this: obj.prop2

Practical Example:

```javaScript

var person  = {
    firstname: "Default",
    lastname: "Default",
    getFullName: function (){
        return firstname + " " + lastname;
    }
}

var shubham = {
    firstname: "Shubham",
    lastname: "Kushwaha"
}

// Don't do this ever! for demo purpose only!!!
shubham.__proto__ = person;
shubham.getFullName(); // Shubham Kushwaha
shubham.firstname; // Shubham

var jane = {
    firstname: "Jane"
};

jane.__proto__ = person;
console.log(jane.getFullName()); //Jane Default

```























































