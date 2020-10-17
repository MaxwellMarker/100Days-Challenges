def capitalize str
  arr = str.split(' ')
  arr.each do |word|
    word.capitalize!
  end
  final = arr.join(' ')
  puts final
end
capitalize 'i love breakfast at bill miller bbq'