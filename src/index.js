exports.min = function min (array) {
    if (!Array.isArray(array) || !array.length) {
        return 0;
    } else {
        let min = array[0];
        for (let i = 1; i < array.length; i += 1) {
            if (min > array[i]) {
                min = array[i];
            }
        }
        return min;
    }
}

exports.max = function max (array) {
    if (!Array.isArray(array) || !array.length) {
        return 0;
    } else {
        let max = array[0];
        for (let i = 1; i < array.length; i += 1) {
            if (max < array[i]) {
                max = array[i];
            }
        }
        return max;
    }
}

exports.avg = function avg (array) {
    if (!Array.isArray(array) || !array.length) {
        return 0;
    } else {
        let sum = 0;
        let avg;
        for (let i = 0; i < array.length; i += 1) {
            sum += array[i];
        }
        avg = sum / array.length;
        return avg;
    }
}
