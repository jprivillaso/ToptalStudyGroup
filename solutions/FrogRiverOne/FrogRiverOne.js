function solution(X, A) {
    let timesPath = Array(X).fill(-1);
    let earliestTime = -1;
    
    for (let i=0; i < A.length; i++) {
        if(timesPath[A[i] -1] === -1) {
            timesPath[A[i] -1] = i;
        }
    }
    
    if(timesPath.every(x => x !== -1)) {
        earliestTime = Math.max(earliestTime, ...timesPath);
    }
    
    return earliestTime;
}
