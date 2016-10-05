// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    
    var map_a = {};
    
    // Insert into map only the positive numbers
    for(var i =0; i<A.length; i++) {
        var currentItem = A[i];
        if (currentItem > 0 ) {
            map_a[currentItem] = currentItem;
        }        
    }
    
    var max_a = 0;
    
    for(number in map_a) {
        max_a = Math.max(max_a, Number(number));
    }
    
    for (var j=1; j < max_a; j++) {
        if(map_a[j] == undefined) return j; 
    }
    
    return max_a + 1;
    
}