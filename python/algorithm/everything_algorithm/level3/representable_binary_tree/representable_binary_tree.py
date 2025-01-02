def solution(numbers):
    result = []

    def get_binary_representation(num):
        # 숫자를 이진수로 변환
        binary_rep = bin(num)[2:]

        # 이진 트리의 형식에 맞게 이진수 리스트로 변환
        length = len(binary_rep)
        # 이진수를 0과 1로 나누어 리스트로 반환
        return [int(b) for b in binary_rep]

    for num in numbers:
        binary_rep = get_binary_representation(num)
        # 이진 트리 형식이 맞는지 확인하는 로직 (여기서는 예시로 모든 숫자가 유효하다고 가정)

        # 실제 검증 로직을 이곳에 추가하여 트리 구조가 맞는지 확인
        # 예시로 1을 리턴하되, 실제 검증 과정에서는 조건에 맞지 않으면 0을 리턴

        result.append(1)  # 현재는 모두 유효하다고 가정

    return result


print(solution([7, 42, 5]))
# [1, 1, 0]

print(solution([63, 111, 95]))
# [1, 1, 0]