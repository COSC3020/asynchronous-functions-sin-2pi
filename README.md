# Asynchronicity

Implement a function that takes an array and a key to search for and counts the
number of times key matches an element in the array (the count matches function
we talked about in lectures). Your implementation must count the number of
matches asynchronously, but does not need to do so in parallel. What type of
asynchronous execution you choose is up to you.

I have not provided a template; depending on how you choose to implement the
function, it will have a different signature.

I have also not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The [async library](https://caolan.github.io/async/v3/) may be helpful with
this.

## Runtime Analysis

What is the time complexity of your implementation (worst-case $\Theta$)? Add
your answer, including your reasoning, to this markdown file.

## Answer

The worst case time complexity of this asynchronous function is $\Theta(n)$, $n$ being the length of the array.

The reason for this is regardles off asynchronous execution, the function still has to iterate over every element in the array.

## Sources

Test code: https://github.com/COSC3020/asynchronous-functions-ZachRenz/blob/main/code.test.js
