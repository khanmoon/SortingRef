function selection(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let k = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[k]) {
                k = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
    }
}
let test = [23, 12, 5, 56, 34, 8, 231];
selection(test)
console.log({ test })