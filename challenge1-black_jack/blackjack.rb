class Player
    attr_accessor :name, :bankroll, :hand
    def initialize
      @name = ''
      @bankroll = 100
      @hand = []
    end
    def empty_hand
      @hand = []
    end
    def add_card card
      @hand << card
    end
  end
  
  class House
    attr_accessor :name, :bankroll, :hand
    def initialize
      @name = 'The House'
      @bankroll = 1000
      @hand = []
    end
    def empty_hand
      @hand = []
    end
    def add_card card
      @hand << card
    end
  end
  
  class Deck
    attr_accessor :deck
    def initialize
      @deck = []
    end
    def make_card face, value
      @deck << {face: face, value: value}
    end
    def set_deck
      @deck = []
      4.times do
        for i in 1..13
          if i == 1
            make_card 'A', 11
          elsif i == 11
            make_card 'J', 10
          elsif i == 12
            make_card 'Q', 10
          elsif i == 13
            make_card 'K', 10
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
  
  human_player = Player.new
  the_house = House.new
  the_deck = Deck.new
  p 'Welcome to Black Jack. What is your name? '
  human_player.name = gets.chomp
  playing = true
  while playing do
    p "Alright, #{human_player.name}. Ready to play?"
    useless = gets.chomp
    the_deck.set_deck
    the_deck.shuffle_deck
    human_player.empty_hand
    the_house.empty_hand
    human_player.add_card the_deck.get_card
    the_house.add_card the_deck.get_card
    human_player.add_card the_deck.get_card
    the_house.add_card the_deck.get_card
    playing = false
  end
  p human_player.hand
  p the_house.hand