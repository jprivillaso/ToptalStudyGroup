function solution(S, P, Q) {
    const mapping = { 'A': 1, 'C': 2, 'G': 3, 'T': 4 };
    let sums = [
        Array(S.length + 1).fill(0),
        Array(S.length + 1).fill(0),
        Array(S.length + 1).fill(0),
        Array(S.length + 1).fill(0)
    ];
    let results = [];
    
    // Calculates the prefix sum
    for(let i=0, len = S.length; i < len; i++){
        let item = mapping[S[i]];
        
        if(i > 0) {
            sums[0][i + 1] = sums[0][i];
            sums[1][i + 1] = sums[1][i];
            sums[2][i + 1] = sums[2][i];
            sums[3][i + 1] = sums[3][i];
            
            sums[item  - 1][i + 1] = sums[item  - 1][i] + 1
        }
        else 
            sums[item  - 1][i + 1] = 1
    }
    
    // Calculates the minimal of the sequences
    for(let j=0, M=P.length; j < M; j++) {
        const x = P[j], y = Q[j] + 1;
        
        if (sums[0][y] > sums[0][x])
            results.push(1);
        else if (sums[1][y] > sums[1][x])
            results.push(2);
        else if (sums[2][y] > sums[2][x])
            results.push(3);
        else 
            results.push(4);
    }
    
    // console.log(sums);
    // console.log(results);
    
    return results;
}
