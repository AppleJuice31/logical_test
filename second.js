function convertArray(array) {
    var resultArray = [];
    for (var i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            resultArray = resultArray.concat(convertArray(array[i]));
        } else {
            resultArray.push(array[i]);
        }
    }
    return resultArray;
}

var result = convertArray([1, 2, [3, 4, [5]]])

console.log(result);
