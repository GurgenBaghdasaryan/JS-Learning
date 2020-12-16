let myFunc = (arr1, arr2) => {
    let arr3 = [...arr1, ...arr2];
    let result = arr3.filter(item => arr1.includes(item) !== arr2.includes(item))
    return result;
}

console.log(myFunc([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 111, 7]));
