function solution(A, K) {
    
    var newA = [];
    
    for(var i=0; i<A.length; i++) {
        var newPos = (i+K) % A.length;   
        newA[newPos] = A[i];
    }
    
    return newA;

}