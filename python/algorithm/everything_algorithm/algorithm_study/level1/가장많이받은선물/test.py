friends = ["joy", "brad", "alessandro", "conan", "david"]

for i, x in enumerate(friends[0: len(friends) - 1]):
    for y in friends[i + 1: len(friends)]:
            print(x, y)
