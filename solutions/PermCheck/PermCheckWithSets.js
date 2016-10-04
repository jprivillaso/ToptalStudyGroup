// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    const idealSum = A.length * (A.length + 1 ) / 2;
    const permSet = new Set();
    let actualSum = 0;
    
    for(let i=0; i < A.length; i++) {
        permSet.add(A[i]);
        actualSum += A[i];
        if (permSet.size !== i + 1) break;
    }
    
    return idealSum === actualSum 
        && permSet.size === A.length
        ? 1
        : 0;
}
