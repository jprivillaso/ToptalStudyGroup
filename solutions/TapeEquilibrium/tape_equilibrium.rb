def solution(a)
  min = Float::INFINITY
  left_sum = a.shift
  right_sum = a.reduce(:+)
  (0..(a.length - 1)).each do |i|
    difference = (left_sum - right_sum).abs
    min = difference if difference < min
    left_sum += a[i]
    right_sum -= a[i]
  end
  min
end
