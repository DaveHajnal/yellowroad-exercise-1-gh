//letrehoz egy a feladatban specifikalt tombot, es ezt visszaadja
function generateArray(count, max) {
    var arr = [];
    for(i = 0; i < count; i++) {
        var tempNum = Math.round(Math.random() * (max-1) + 1);
        arr.push(tempNum);
    }
//    console.log(arr);
    return arr;
}

//kap egy korabban legeneralt tombot, es kiszamolja, hogy legkevesebb hany lepessel lehet vegigmenni rajta a leirtak szerint
function calculateSteps(arr) {

    if(arr[0] > arr.length) {
        arr = [0, 'end'];
    }else {
        arr[0] = arr.indexOf(arr[0]);
    }


    console.log(arr);
    return arr;
}

for(var i = 0; i < arr.length)

