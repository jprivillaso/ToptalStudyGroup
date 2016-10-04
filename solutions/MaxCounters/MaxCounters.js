function solution(N, A) {
    let counters = Array(N).fill(0);
    let currentMax = 0;
    const increase = (x) => {
        counters[x] += 1;
        if(counters[x] > currentMax)
            currentMax = counters[x];
    };
    const maxCounter = () => {
        counters = Array(N).fill(currentMax);
    };
    
    for(let i=0; i < A.length; i++) {
        if(A[i] <= N) 
            increase(A[i] -1);
        else
            maxCounter();
    }
    
    return counters;
}
