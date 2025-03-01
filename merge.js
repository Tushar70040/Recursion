function mergeSort(arr) {
    if (arr.length <= 1)
        { 
            return arr;
         } // Base case: return if only one element


    let mid = Math.floor(arr.length / 2); // Find the middle index
    let left = mergeSort(arr.slice(0, mid)); // Recursively sort left half
    let right = mergeSort(arr.slice(mid)); // Recursively sort right half

    return merge(left, right); // Merge sorted halves
}

function merge(left, right) {
    let result = [], i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }

    return result.concat(left.slice(i)).concat(right.slice(j)); 
}

let arr = [5, 3, 8, 4, 2, 7, 1, 6];
console.log(mergeSort(arr));
