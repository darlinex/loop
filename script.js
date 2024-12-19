const modifyArray = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] *= 2;
        } else {
            arr[i] -= 1; 
        }
    }
    return arr;
};


const numbers = [1, 2, 3, 4, 5,];
const modifiedNumbers = modifyArray(numbers);
console.log(modifiedNumbers); 
