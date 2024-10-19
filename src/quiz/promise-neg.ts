function negsPerRow(arr: number[][], rowIdx: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (arr.length > rowIdx) {
            arr[rowIdx].some(e => e < 0) ? resolve(`Found Evidence: ${arr[rowIdx]}`) : reject('Not Found');
        } else {
            reject(`Row Index ${rowIdx} must be within 0 and ${arr.length}`);
        }
    });
}

const array2D_2 = [
    [1, 2, 3],
    [4, 5, -6],
    [7, 8, 9]
];

const negsPerRowPromises: Promise<string>[] = [];

for (let x = 0; x < array2D_2.length; x++) {
    negsPerRowPromises.push(negsPerRow(array2D_2, x));
}

Promise.allSettled(negsPerRowPromises)
    .then((results) => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(result.value);
            }
        });
    })
    .catch((error) => console.log(`Error Msg: ${error}`));