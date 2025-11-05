const repeatString = function(str, num) {
    let repeated = '';

    for (let i=0; i < num; i++) {
        repeated += str;
    }
    
    if (num < 0) return 'ERROR';
    else return repeated
};

repeatString('hey', 3)


// Do not edit below this line
module.exports = repeatString;
