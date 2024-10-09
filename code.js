function mergesort(array) {
    // checking if array is empty or has one element
    if (array.length < 2) return array;

    // creating the size of the subarrays for latter merging
    for (let size = 1; size < array.length; size *= 2) {
        for (let leftStart = 0; leftStart < array.length; leftStart += size * 2) {
            let mid = Math.min(leftStart + size, array.length);
            let rightEnd = Math.min(leftStart + size * 2, array.length);
            let leftIndex = leftStart;
            let rightIndex = mid;
            let tempArray = [];

            // Merges the two halves
            while (leftIndex < mid && rightIndex < rightEnd) {
                if (array[leftIndex] <= array[rightIndex]) {
                    tempArray.push(array[leftIndex++]);
                } else {
                    tempArray.push(array[rightIndex++]);
                }
            }

            // Copy the remaining elements from the left half
            while (leftIndex < mid) {
                tempArray.push(array[leftIndex++]);
            }

            // Copy the remaining elements from the right half
            while (rightIndex < rightEnd) {
                tempArray.push(array[rightIndex++]);
            }

            // Place merged result back into the original array
            for (let i = 0; i < tempArray.length; i++) {
                array[leftStart + i] = tempArray[i];
            }
        }
    }
    return array;
}
