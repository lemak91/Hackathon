
const numOfRampsBelow = (num) => {
    num = document.getElementById('input').value;
    let count = 0;
    for(let i = 0; i < num; i++) {
        let isRamp = true;
        let indexArray = i.toString().split('');
        for(let j = 0; j < indexArray.length; j++) {
            if(indexArray[j] > indexArray[j + 1]) {
                isRamp = false;
            }
        }
        if(isRamp) {
            console.log(indexArray);
            count++;
        }
    }
    document.getElementById("output").innerHTML = count;
    return count;
};

console.log(numOfRampsBelow(99999));
