const beepTimer = function(time){
    // If not a number, NaN < 0
    if(parseInt(time) > 0){
        setTimeout(() => {
            process.stdout.write('\x07');
        }, parseInt(time) * 1000);
    }
}

process.argv.forEach(function (val, index, array) {
    if(index > 1){
        beepTimer(val);
    }
});