
def is_validate_rotation_value(str):
    map = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    stack = []
    for _ in str:
        if _ in "({[":
            stack.append(_)
        else:
            if not stack:
                return False

            top = stack.pop()
            if map[top] != _:
                return False
    return True

def solution(s):
    count = 0

    for i in range(len(s)):
        a = s[i:]
        b = s[:i]

        rotated = a + b
        print(rotated)
        if is_validate_rotation_value(rotated):
            count += 1

    return count

print(solution("[](){}"))
# 3

# print(solution("}]()[{"))
# 2

# print(solution("[)(]"))
# 0

# print(solution("}}}"))
# 0

# https://school.programmers.co.kr/learn/courses/30/lessons/76502?language=python3