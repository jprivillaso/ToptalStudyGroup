// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let N = A.length;
    let count0 = 0, count1 = 0;
    let countPassingCars = 0;

    for (let i=0; i < N; i++) {
        if(A[i] === 0) count0 += 1;
        if(A[i] === 1) count1 += 1;
    }

    for(let i=0; i < N; i++) {
        let carDirection = A[i];
        if(carDirection === 0) {
            countPassingCars += count1;
        }
        else
            count1 -= 1;

    }

    if(countPassingCars > 1000000000) return -1;
    return countPassingCars;
}
