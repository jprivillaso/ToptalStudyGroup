// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {

    let totalDivisibles   =  Math.floor(B / K);
    let excludeDivisibles = Math.floor((A - 1) / K);
    return totalDivisibles - excludeDivisibles;
    
}