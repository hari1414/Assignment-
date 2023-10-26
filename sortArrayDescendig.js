function sortArrayDescending(arr) {
    // Implement a simple bubble sort algorithm in descending order
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap elements if they are in the wrong order
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const unsortedArray = [5, 3, 8, 1, 4];
sortArrayDescending(unsortedArray);
console.log(unsortedArray);
