from collections import Counter

def solution(S):
    count = 0
    freq = {}
    for char in S:
        if char in freq:
            freq[char] += 1
        else:
            freq[char] = 1

    for key, value in freq.items():
        if value < 2:
            return 0

    for value in freq.values():
        count += value // 2

    return count

print(solution("aaaabc"))  # 2
print(solution("xyvzwy"))  # 1
print(solution("dd"))  # 0
print(solution("fknfkn"))  # 2
