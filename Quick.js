function findPivot(arr, lo, hi) {
    let x = arr[hi];
    let i = lo - 1;
    for (let j = lo; j < hi; j++) {
        if (arr[j] < x) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, hi);
    return i + 1;
}
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
function sort(arr, lo, hi) {
    if (lo < hi) {
        let pivot = findPivot(arr, lo, hi);
        sort(arr, lo, pivot - 1);
        sort(arr, pivot + 1, hi)
    }
}

let test = [23, 12, 5, 56, 34, 8, 231];

sort(test, 0, test.length)
console.log({ test })