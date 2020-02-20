exports.min = function min(array) {
    if (array === undefined || array.length === 0) return 0;
    array.sort((a, b) => a - b);
    return array[0];
};

exports.max = function max(array) {
    if (array === undefined || array.length === 0) return 0;
    array.sort((a, b) => b - a);
    return array[0];
};

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) return 0;
    let result = array.reduce((a, b) => a + b) / array.length;
    return result;
};
