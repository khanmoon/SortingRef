function insertion(arr) {
    for (let i = 1; i < arr.length; i++) {
        let x = arr[i];
        let j = i;
        while (j - 1 >= 0 && x < arr[j - 1]) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = x;
    }
}
let test = [23, 12, 5, 56, 34, 8, 231];

insertion(test)
console.log({ test })