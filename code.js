function mergesort(array) {
   
    Arrleng = array.length;

    for (size = 1; size < Arrleng; size = size * 2) {
        for (leftStart = 0; leftStart < Arrleng - 1; leftStart = leftStart + 2 * size){
            mid = Math.min(leftStart + size, Arrleng);
            rightEnd = Math.min(leftStart + 2 * size, Arrleng);

            left = leftStart;
            right = mid;

            while (left < right && right < rightEnd) {
                if (array[left] <= array[right]) {
                    left++;
                } 
                else {
                    temp = array[right];
                    for (index = right; index > left; index--) {
                        array[index] = array[index - 1];
                    }
                    array[left] = temp;
                    left++;
                    right++;
                }
            }
        }
    }
           
    return array;
}
