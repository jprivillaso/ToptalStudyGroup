// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B, K) {
    let x = B % K;
    return (1 + Math.floor(((B-x) - A) / K));
}
