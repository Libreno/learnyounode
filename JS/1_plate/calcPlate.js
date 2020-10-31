function calcPlate(inputN){
    if (inputN < 1){
        return 'n must be natural number';
    };
    const n = inputN - 1;
    const letterMaxCount = 5;
    let limit = 0;
    let lowLimit = 0;
    let i = letterMaxCount;
    let digitCount = 0;
    while (i >= 0 && digitCount === 0){
        lowLimit = limit;
        limit += Math.pow(10, i) * Math.pow(26, letterMaxCount - i);
        // console.log('limit ' + limit);
        if (n <= limit){
            digitCount = i;
            // console.log('lowLimit ' + lowLimit);
            // console.log('digitCount ' + digitCount);
        }
        i--;
    };
    const letterCount = letterMaxCount - digitCount;
    const numOverLimit = n - lowLimit;
    const restN = numOverLimit % Math.pow(10, digitCount);
    let str = ''.padStart(letterCount, 'A').split('');
    let pow = letterCount;
    let letterN = Math.trunc(numOverLimit / Math.pow(10, digitCount));
    // console.log('numOverLimit ' + numOverLimit);
    // console.log('letterN ' + letterN);
    // console.log('restN ' + restN);
    let iLetter = 0;
    while(letterN !== 0){
        const num = Math.trunc(letterN / Math.pow(26, --pow));
        if (num >= 26){
            return 'overflow, max num: 19`244`736 = ZZZZZ';
        };   
        str[iLetter] = String.fromCharCode('A'.charCodeAt(0) + num);
        letterN -= num * Math.pow(26, pow);
        // console.log('num ' + num);
        // console.log('letter ' + str[iLetter]);
        // console.log('letterN ' + letterN);
        iLetter++;
    };
    const strN = restN.toString();
    return strN.padStart(digitCount, '0').slice(0,digitCount) + str.join('');
}
const n = process.argv[2];
const plate = calcPlate(n);
console.log(n + ': ' + plate);