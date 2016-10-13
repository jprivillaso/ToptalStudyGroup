function solution(X, A) {
    
    var map_a = {};
    var flags = 0; // When flags is equal to X, the frog can jump
    
    for (var i=0; i < A.length; i++) {
        var currentItem = A[i];
        if (map_a[currentItem] == undefined) {
            map_a[currentItem] = currentItem;
            flags++
        }
        if (flags===X) return i; 
    }
    
    return -1;
    
}