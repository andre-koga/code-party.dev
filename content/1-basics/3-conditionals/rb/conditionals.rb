def main
  print "Enter a number: "
  number = gets.to_i

  if number > 0
    puts "The number is positive."
  elsif number < 0
    puts "The number is negative."
  else
    puts "The number is zero."
  end
end

main if __FILE__ == $0