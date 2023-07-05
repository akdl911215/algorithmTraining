def find_same_number(input_number):
    number_dict = {
        39: "Justinn",
        14: "John",
        67: "Mike",
        105: "Summer"
    }
    result = set()

    if input_number in number_dict:
        result.add(number_dict[input_number])
    else:
        result.add('?')


    return result

print(find_same_number(39))
print(find_same_number(20))