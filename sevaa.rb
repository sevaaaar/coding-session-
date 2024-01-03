

def ord_alphlong(str)
    words = str.split(/\s+/)
    words.sort! do |a, b|
      length_comparison = a.length - b.length
      if length_comparison != 0
        length_comparison
      else
        a.downcase <=> b.downcase
      end
    end
  
    result = ''
    current_length = nil
    words.each do |word|
      lowercase_word = word.downcase
      if word.length != current_length
        result += '^' unless current_length.nil?
        current_length = word.length
      else
        result += ' '
      end
  
      if word.length == 1
        result += word.upcase
      else
        result += word
      end
    end
  
    result
  end
  
  # Example usage:
  string = 'This is a sample string to test the function'
  sorted_words = ord_alphlong(string)
  puts sorted_words










  def ord_alphlong(matn):
    sozlar = matn.split()
    uzunlik = []
    for soz in sozlar:
      uzunlik.append(len(soz))
  
    sozlar.sort(key=str.lower)
  
    mat = str()
    for i in set(uzunlik):
      for soz in sozlar:
        if len(soz) == i:
          mat += f'{soz} '
      mat = mat.strip(' ')
      mat += '^'
    mat = mat.strip(' ^')
    return mat
  