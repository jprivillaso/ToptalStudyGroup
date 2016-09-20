def solution(a, k)
  return a if a.length == 0
  k.times { a.unshift(a.pop) }
  a
end
