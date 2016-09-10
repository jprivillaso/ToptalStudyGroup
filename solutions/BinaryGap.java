public int solution(int N) {
    
  String number = Integer.toBinaryString(N);
  int maxBinaryGap = 0;
  int lastPosition = 0;
  
  for (int i = 0; i < number.length(); i++) {
    
    if (number.charAt(i) == '1' && i != 0) {
      maxBinaryGap = Math.max(maxBinaryGap, i - lastPosition - 1);
      lastPosition = i;
    } else if (number.charAt(i) == '1'){
      lastPosition = i;
    }
    
  }
  
  return maxBinaryGap;
  
}