function solution(A) {
    
    var a_map = {};
    
    for (var i =0; i < A.length; i++) {
        var currentItem = A[i];
        if (a_map[currentItem]) {
            return 0;
        }
        a_map[currentItem] = currentItem;
    }
    
    var realSum = 0;
    var expectedSum = ((A.length)*(A.length+1))/2;
    
    for(item in a_map) {
        realSum += Number(item);
    }
    
    if (realSum === expectedSum) {
        return 1;
    }
    
    return 0;
    
}