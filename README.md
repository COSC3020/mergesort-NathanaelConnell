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

For the time complexity of the code, the outer for loop is iterating from 1 and doubling across the array eachtime making the time complexity for that loop logn. The inner loop is itterating of the pairs of the subarray and runs as many as there are subarray pairs making the inner loop a time complexity of n. Inside the inner loop I am also merging the subarrays, which is comparing and shifting the subarrays to where the need to be. In the worst case the shifting will be required for each element which would then give a time complexity of n. Because the work done on each level of merging is linear and we are iterating logrimthmically across the entire algorithm, we have a total time complexity of big theta n^2 log n which is worse than most merge algorithms because of the extra work being done to make it in place.

I had psuedo code help to understand the ideas of merge sort being in place.  
"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
