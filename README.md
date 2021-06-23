# AlgoCasts

Companion repo to [The Coding Inteview Bootcamp: Algorithms + Data Structures](https://www.udemy.com/course/coding-interview-bootcamp-algorithms-and-data-structure/)


1. String reversal:
=====================

solution 1: Unoptimised

function reverse(str) {
    const arr = str.split('');
    arr.reverse();
    return arr.join();
}

2. Palindrome:
================

Solution 1:

 function palindrome (str){
        const reversed = str.split('').reverse().join('');
    return str === reversed;
    }
