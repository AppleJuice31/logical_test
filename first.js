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
    console.log(start);
    // loop through the values from i to j
    // for (k = start; k < end; k++) {
    //     //convert the char code to string (Alphabets)
    //     var str = String.fromCharCode(k);
    //     //print the result in console
    //     console.log(str);
    // }

    var n = 3
    var k = start;

    for (j = 0; j < n; j++) {
        // var temp = []
        for (let i = n - 1; i >= 0; i--) {
            // if (k == end) {
            //     console.log('end');
            // }
            var str = String.fromCharCode(k)
            console.log(str);
            k++;
        }
    }


}



var alphabetCase = prompt("Enter small or capital", "capital")
console.log(alphabetCase);
printAlphabets(alphabetCase);
