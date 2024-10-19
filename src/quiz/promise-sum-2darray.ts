function sumNums(arr: number[][], rowIdx: number): Promise<number> {
    return new Promise((resolve, reject) => {
        if(arr.length > rowIdx ) {
            let sum = 0;
            for(let i = 0; i < arr[rowIdx].length; i++) {
                sum += arr[rowIdx][i];
            }
            resolve(sum);  
        }
        else {
            reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`);
        }
    });
}


const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let rowSumPromises: Promise<number>[] = [];

for(let x = 0; x < array2D_1.length; x++) {
    rowSumPromises.push(sumNums(array2D_1, x));
}

Promise.all(rowSumPromises)
    .then((rowSums) => {
        let sum = 0;
        rowSums.forEach(rowSum => {
            sum += rowSum;
        });
        console.log(`Sum = ${sum}`);
    })
    .catch((error) => console.log(`Error Msg: ${error}`));
    