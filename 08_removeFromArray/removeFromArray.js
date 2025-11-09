const removeFromArray = function(arr, ...removeMe) {
    return arr.filter(item => !removeMe.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
