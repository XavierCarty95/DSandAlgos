var replaceElements = function(arr) {
    let temp = 0;
    let max = -1;
    for (let i = arr.length - 1; i > -1; i--) {
        temp = arr[i]
        arr[i] = max
        max = Math.max(temp,max)
    }
    return arr
};