def solution(a)
  array_length = a.length
  return 0 if a.min != 1
  return 0 if array_length != a.uniq.length
  return 0 if a.max != array_length
  1
end
