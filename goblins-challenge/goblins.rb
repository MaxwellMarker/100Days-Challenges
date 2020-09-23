# create an array with the info I need for the goblins
goblins = []
for i in 1..100
  goblins << {num: i, cured: false}
end

# cure and uncure the goblins 100 times
for i in 1..100
  goblins.each do |goblin|
    if goblin[:num] % i == 0
      goblin[:cured] = !goblin[:cured]
    end
  end
end

# put the cured goblins numbers in an array
final_cured = []
goblins.each do |goblin|
  if goblin[:cured]
    final_cured << goblin[:num]
  end
end

print final_cured