








def spin_words(text)
  array = ['.', ',', '!', '?']
  result = text.split(' ').map do |word|
    if word.length >= 5 && !array.include?(word[-1])
      word.reverse
    else
      word
    end

  end
  result.join(' ')
end

puts spin_words("Hey fellow Le Wagon alumni")
puts spin_words("Rake it until you make it!!!")
puts spin_words("Change your life, learn to code.")


# (word[-1] != ',' && word[-1] != '.' && word[-1] != '!' && word[-1] != '?')
