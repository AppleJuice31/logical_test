let arr = [3, 3, 1, 1, 1, 8, 3, 6, 8, 7, 8]

function countfreq(arr) {
    let countMap = new Map();
    let indexMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (countMap.has(arr[i])) {
            countMap.set(arr[i], countMap.get(arr[i]) + 1);
        }
        else {
            countMap.set(arr[i], 1);
            indexMap.set(arr[i], i);
        }
    }

    let resultfreq = function (num1, num2) {
        let firstFreq = countMap.get(num1);
        let secondFreq = countMap.get(num2);
        if (firstFreq != secondFreq) {
            return countMap.get(num2) - countMap.get(num1);
        }
        else {
            return indexMap.get(num1) - indexMap.get(num2);
        }
    }

    arr.sort(resultfreq)
    console.log(arr);
}


countfreq(arr)