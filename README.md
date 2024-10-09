# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

For the time complexity of the code, the outer loop is is moving by two times so the complexity would be O(log n) and the inner loop is accessing and copying each element to the temp array so that is at constant time of O(n). Putting them together we get O(nlogn) and because that is best and worst case we dont need to calculate omega and we are left with big Theta (nlog n).

I had ai help with how to understand the iterative version of merge sort compared to the recursive version.  
"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
