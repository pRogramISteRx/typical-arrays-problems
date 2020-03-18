exports.min = function min (array) {
    if (arguments.length === 0 || array.length === 0) {
        return 0;
    } else {
        let minElement = array[0];
        for (let i = 1; i < array.length; i++) {
            if (minElement > array[i]) {
                minElement = array[i];
            }
        }
        return minElement;
    }
}

exports.max = function max (array) {
    if (arguments.length === 0 || array.length === 0) {
        return 0;
    } else {
        let maxElement = array[0];
        for (let i = 1; i < array.length; i++) {
            if (maxElement < array[i]) {
                maxElement = array[i];
            }
        }
        return maxElement;
    }
}

exports.avg = function avg (array) {
    if (arguments.length === 0 || array.length === 0) {
        return 0;
    } else {
        let avgValue;
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        avgValue = sum / array.length;
        return avgValue;
    }
}
