def solution(x, y, d)
  return 0 if x >= y
  number_of_jumps = ((y - x).to_f/d).ceil
end
