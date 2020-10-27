function convertFromBaseToBase(str, fromBase, toBase){
    var num = parseInt(str, fromBase); //convert from one base to another
    return num.toString(toBase);
}