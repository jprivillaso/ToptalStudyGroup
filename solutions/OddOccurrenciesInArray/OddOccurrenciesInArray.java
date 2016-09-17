public int solution(int[] A) {
  
  int ret = 0;
  
  for (int i = 0; i < A.length; i++) {
    ret = ret ^ A[i];
  }
  
  return ret;
  
}