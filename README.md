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

// we'll take a string, turn it into an array by calling split function on it. Reduce is used to take all different values within an array and condense them down to a single array.

function reverse(str){

}







# 2. Palindrome: #

Solution 1:

 function palindrome (str){
        const reversed = str.split('').reverse().join('');
    return str === reversed;
    }











    JS Primitive types:
1. string
2. boolean
3. null
4. undefined
5. number
6. symbol

Anything that's not a primitive type is called an object.

Key js array methods:

1. map()
.........
```javascript
    const arr=[1,2,3,4]
        undefined
    arr.map(el => el +1)
        (4)Â [2, 3, 4, 5]
    arr
        (4) [1, 2, 3, 4]
```
    It does not changes the original array, it does operations on an array in a immutable way.

2. filter()
..........................
Browser Console Output
..........................
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


3. reduce()
............





4. find()
5. includes()
.............
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
...........................................


Promise
........
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

```javascript
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

```javascript
    fetch("https://jsonplaceholder.typicode/posts")
        .then(response => response.json())
        .then(console.log(json))
```
