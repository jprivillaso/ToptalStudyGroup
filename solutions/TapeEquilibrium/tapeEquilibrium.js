function solution(A) {
    
    var minDifference = null;
    var totalSum = 0;
    
    if (A.length == 2) {
        return Math.abs(A[0] - A[1]);
    }
    
    for(var i = 0; i < A.length; i++) {
        totalSum += A[i];
    }
    
    var leftToRightSum = 0;
    
    for(var j = 0; j < A.length-1; j++) {
        
        leftToRightSum += A[j];
        var remainingSum = totalSum - leftToRightSum;
        var equation = Math.abs(leftToRightSum-remainingSum);
        minDifference = minDifference === null ? equation : Math.min(equation, minDifference);
        
    }
    
    return minDifference;
    
}