def solution(a)
  return 1 if a.max <= 0
  a = a.select{|e| e > 0}.uniq

  (1..a.max + 1).each do |e|
    return e unless a.include?(e)
  end
end
