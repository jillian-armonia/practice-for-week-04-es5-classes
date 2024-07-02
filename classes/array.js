// Your code here
Array.prototype.isEqual = function(array){
    const originalArray = this;
    const result = originalArray.every((elem, i) => {
        return array[i] === elem;
    })
    return result;
}
