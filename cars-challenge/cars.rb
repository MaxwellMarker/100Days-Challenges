@colors = ['red','orange','yellow','green','blue','purple','black']
def find_color days_since, days_out
  days = days_since + days_out
  week_day = days % 7
  if week_day == 5
    puts "No cars, that is a Saturday"
  elsif week_day == 6
    puts "No cars, that is a Sunday"
  else
    skipped = ((days - week_day) / 7) * 2
    working = days - skipped
    puts @colors[working % 7]
  end
end
find_color 0, 0
find_color 0, 1
find_color 0, 2
find_color 0, 3
find_color 0, 4
find_color 0, 5
find_color 0, 6
find_color 0, 7
find_color 0, 8
find_color 0, 9
find_color 0, 10
find_color 0, 11
find_color 0, 12