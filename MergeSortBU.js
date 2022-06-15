function merge(arr, aux, lo, mid, hi) {
    for (let k = lo; k <= hi; k++) {
        aux[k] = arr[k]
    }
    let i = lo;
    let j = mid + 1
    for (let k = lo; k <= hi; k++) {
        if (i > mid) arr[k] = aux[j++];
        else if (j > hi) arr[k] = aux[i++]
        else if (aux[i] > aux[j]) arr[k] = aux[j++]
        else arr[k] = aux[i++]
    }
}

function sort(arr) {
    let n = arr.length
    let aux = Array(n);
    for (let len = 1; len < n; len *= 2) {
        for (let lo = 0; lo + len < n; lo += len + len) {
            mid = lo + len - 1;
            hi = Math.min(lo + len + len - 1, n - 1);
            merge(arr, aux, lo, mid, hi);
        }
    }
}

let test = [23, 12, 5, 54, 65, 2, 32, 12];

sort(test)
console.log({ test })