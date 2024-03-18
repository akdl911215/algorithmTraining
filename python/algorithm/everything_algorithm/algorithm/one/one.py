def solution(category, relation, member, article):
    answer = []

    category_relation_table = {}
    for el in relation:
        parent, child = el.split()
        print(parent, child)
        if parent in category_relation_table:
            category_relation_table[parent].append(child)
        else:
            category_relation_table[parent] = [child]
    print('category_relation_table : ', category_relation_table)

    category_table = {}
    for el in category:
        category_table[el] = []
    print('category_table : ', category_table)

    for el in article:
        str_split = el.split()
        # ['a', 'a,b', 'c', 'c,d', 'c,e']

        for i in range(len(str_split)):
            print(str_split[i])

        print("-------------")




    return answer

print(solution(
    ["a", "b", "c", "d", "e"],
    ["a b", "b c", "c d", "c e"],
    ["A a", "B b", "C c", "D d", "E e"],
    ["a", "a b", "c", "c d", "c e"]
))
# [1, 2, 3, 4, 5]