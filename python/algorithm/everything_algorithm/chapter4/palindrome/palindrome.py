                    # 주어진 문장이 회문인지 아니니지 찾기(큐와 스택의 특징을 이용)
# 입력: 문자열 s
# 출력: 회문이면 True, 아니면 false

def palindrome(s):
    # 큐와 스택을 리스트로 정의
    queue = []
    stack = []
    # 1단계: 문자열의 알파벳 문자를 각각 큐와 스택에 넣음
    for x in s:
        print('x : ', x)

        # 해당 문자가 알파벳이면(공백, 숫자, 특수문자가 아니면)
        # 큐와 스택에 각각 그문자를 추가
        if x.isalpha(): # isalpha(): 주어진 문자가 알파벳 문자에 해당하는지 확인
            queue.append(x.lower()) # lower() > 소문자로 바꾸는 함수
            stack.append(x.lower())


    # 2단계: 큐와 스택에 들어 있는 문자를 꺼내면서 비교
    while queue: # 큐에 문자가 남아 있는 동안 반복
        print('queue : ', queue)
        print('stack : ', stack)
        if queue.pop(0) != stack.pop(): # 큐와 스택에 꺼낸 문자가 다르면 회문이 아님
            return False

    return True

# print(palindrome("Wow"))
print(palindrome("Madam, I'm Adam."))
# print(palindrome("Madazrm, I am Adam."))
# print(palindrome("moon"))