function solution(N, A) {
    let counters = Array(N).fill(0);
    let lastMax = 0;
    let currentMax = 0;
    const increase = (x) => {
        if(counters[x] < lastMax) {
            counters[x] = lastMax;
        }        
        counters[x] += 1;
        if(counters[x] > currentMax) {
            currentMax = counters[x];
        }        
    };
    const maxCounters = () => {
        counters = counters
            .map(x => x < lastMax? lastMax : x);
    };

    for(let i=0; i < A.length; i++) {
        if(A[i] <= N)
            increase(A[i] -1);
        else {
            lastMax = currentMax;
        }
    }
    maxCounters();
    return counters;
}
