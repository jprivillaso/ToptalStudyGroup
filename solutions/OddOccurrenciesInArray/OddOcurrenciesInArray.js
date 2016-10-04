// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(A) {
    return A.reduce((acc, val) => acc ^= val,0);
}
