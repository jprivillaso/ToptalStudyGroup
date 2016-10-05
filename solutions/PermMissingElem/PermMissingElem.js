function solution(A) {
    
    // (n(n+1))/2
    var expectedSum = ((A.length+1)*(A.length+2))/2;
    var realSum = 0;
    
    realSum = A.reduce( (prev, curr) => prev + curr );
    
    return expectedSum - realSum;
    
}