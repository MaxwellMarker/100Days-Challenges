class Player
  attr_accessor :name, :bankroll, :hand

  def initialize
    @name = ""
    @bankroll = 100
    @hand = []
  end

  def empty_hand
    @hand = []
  end

  def add_card(card)
    @hand << card
  end

  def count_hand
    count = 0
    @hand.each { |card|
      count += card[:value]
    }
    count
  end

  def win
    @bankroll += 10
  end

  def lose
    @bankroll -= 10
  end
end

class House
  attr_accessor :name, :bankroll, :hand

  def initialize
    @name = "The House"
    @bankroll = 1000
    @hand = []
  end

  def empty_hand
    @hand = []
  end

  def add_card(card)
    @hand << card
  end

  def count_hand
    count = 0
    @hand.each { |card|
      count += card[:value]
    }
    count
  end

  def win
    @bankroll += 10
  end

  def lose
    @bankroll -= 10
  end
end

class Deck
  attr_accessor :deck

  def initialize
    @deck = []
  end

  def make_card(face, value)
    @deck << { face: face, value: value }
  end

  def set_deck
    @deck = []
    4.times do
      for i in 1..13
        if i == 1
          make_card "A", 11
        elsif i == 11
          make_card "J", 10
        elsif i == 12
          make_card "Q", 10
        elsif i == 13
          make_card "K", 10
        else
          make_card i, i
        end
      end
    end
  end

  def shuffle_deck
    @deck.shuffle!()
  end

  def get_card
    @deck.shift
  end
end

player = Player.new
house = House.new
the_deck = Deck.new
print "Welcome to Black Jack. What is your name? "
player.name = gets.chomp
playing = true
while playing
  print "Alright, #{player.name}. You have #{player.bankroll} in the bank and the house has #{house.bankroll}. Press enter to play. "
  useless = gets.chomp
  puts
  # set up the deck and give players their starting cards
  the_deck.set_deck
  the_deck.shuffle_deck
  player.empty_hand
  house.empty_hand
  player.add_card the_deck.get_card
  house.add_card the_deck.get_card
  player.add_card the_deck.get_card
  house.add_card the_deck.get_card
  # give player choice of taking another card
  hitting = true
  while hitting
    print "This is your current hand: "
    player.hand.each do |card|
      print "#{card[:face]} "
    end
    puts
    if player.count_hand > 20 or house.count_hand > 20
      hitting = false
      break
    end
    print 'Would you like another card? ( y / n ) '
    hit_answer = gets.chomp
    puts
    if hit_answer.downcase == 'n'
      hitting = false
    else
      player.add_card the_deck.get_card
      if house.count_hand < 18 and player.count_hand < 22
        house.add_card the_deck.get_card
      end
    end
  end
  if house.count_hand < player.count_hand and player.count_hand < 22
    house.add_card the_deck.get_card
  end
  if house.count_hand < player.count_hand and player.count_hand < 22
    house.add_card the_deck.get_card
  end
  # compare computer hand count to player hand count
  player_count = player.count_hand
  house_count = house.count_hand
  p "You got #{player_count} and the house got #{house_count}."
  if player_count == house_count
    p "It is a tie."
  elsif player_count > 21
    if house_count > 21
      p "You both went over 21 so nobody wins."
    else
      p "You went over 21 so the house wins."
      player.lose
      house.win
    end
  elsif house_count > 21
    p "The house went over 21 so you win."
    player.win
    house.lose
  elsif player_count > house_count
    p "You win."
    player.win
    house.lose
  else
    p "The house wins."
    player.lose
    house.win
  end
  if player.bankroll <= 0
    puts
    p "You went bankrupt so you have lost the game."
    playing = false
  elsif house.bankroll <= 0
    puts
    p "The house has run out of money so you have won the game"
    playing = false
  else
    puts
    p "You have #{player.bankroll} in the bank and the house has #{house.bankroll}"
    p "Would you like to continue playing? ( y / n )"
    answer = gets.chomp
    if answer.downcase == "n"
      playing = false
    end
  end
end
