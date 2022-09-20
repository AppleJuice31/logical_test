function printAlphabets(alphabetCase) {

    if (alphabetCase == 'capital') {
        var start = 65;
        var end = 91;

    }
    else if (alphabetCase == 'small') {
        start = 97;
        end = 123;
    }
    else {
        alert("enter either small or capital")
    }
    // loop through the values from i to j
    // for (k = start; k < end; k++) {
    //     //convert the char code to string (Alphabets)
    //     var str = String.fromCharCode(k);
    //     //print the result in console
    //     console.log(str);
    // }

    for (j = 0; j < n; j++) {
        for (let i = n - 1; i >= 0; i--) {
            var k = start;
            // if (k == end) {
            //     console.log('end');
            // }
            var str = String.fromCharCode(k)
            console.log(str);
            k++;
        }
    }


}


// var start = 65;
// var end = 91;


// function printAlphabets(n) {
//     for (j = 0; j < n; j++) {

//         for (let i = n - 1; i >= 0; i--) {
//             console.log('s');
//         }
//         console.log("\n");
//     }
// }


// printAlphabets(3);

var alphabetCase = prompt("Enter small or capital", "capital")
console.log(alphabetCase);
printAlphabets(alphabetCase);


// function print(a, m) {
//     var b = Array(m * m);
//     for (i = 0; i < m * m; i++)
//         for (j = 0; j < m; j++)
//             b[j] = b[i * m + j] = a[j];
//     return b;
// }

// const alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// var m = 26;
// let c = print(alpha, m)
// function alphaMatrix(n) {
//     var matrixSize = n * n;
//     var matrixElements = [];
//     var matrixRows = [];

//     for (i = 0; i < matrixSize; i++) {
//         matrixElements.push(c[i]);
//     }
//     for (j = 0; j < n; j++) {
//         matrixRows.push(matrixElements.splice(0, n));
//     }
//     output = matrixRows[0].map((_, colIndex) => matrixRows.map(row => row[colIndex]));
//     return (output.reverse())

// }
// let res = alphaMatrix(3)
// console.log(res)