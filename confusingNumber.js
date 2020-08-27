var confusingNumber = function(N) {
    const confused = new Set([0, 1, 6, 8, 9]);
    let flag = true;
    const arr = N.toString().split('').map(n => {
        if(!confused.has(Number(n))) {
            flag = false;
            return n;
        }
        if(n === '6') return '9';
        if(n === '9') return '6';
        return n;
    });
    return flag && !(arr.reverse().join('') === N.toString());
};