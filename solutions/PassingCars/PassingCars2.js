function solution (A) {

  let zeroes = 0;
  let passingCars = 0;

  for (let i = 0; i < A.length; i++) {

    if (A[i] === 0) {
      zeroes++;
    } else if (zeroes > 0) {
      passingCars = passingCars + zeroes;
      if (passingCars > 1000000000) return -1; 
    }

  }

  return passingCars;

}