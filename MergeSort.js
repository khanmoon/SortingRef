function merge(arr, aux, lo, mid, hi) {
    for (let i = lo; i <= hi; i++) {
        aux[i] = arr[i];
    }
    let i = lo;
    let j = mid + 1;
    for (let k = lo; k <= hi; k++) {
        if (i > mid) arr[k] = aux[j++];
        else if (j > hi) arr[k] = aux[i++];
        else if (aux[i] < aux[j]) arr[k] = aux[i++];
        else arr[k] = aux[j++];
    }
}

function mergeSort(arr, aux, lo, hi) {
    if (lo < hi) {
        let mid = lo + ((hi - lo) >> 1);
        mergeSort(arr, aux, lo, mid);
        mergeSort(arr, aux, mid + 1, hi);
        merge(arr, aux, lo, mid, hi)
    }
}

function sort(arr) {
    let aux = Array(arr.length).fill(0);
    mergeSort(arr, aux, 0, arr.length - 1)
}
let test = [23, 12, 5];

sort(test)
console.log({ test })