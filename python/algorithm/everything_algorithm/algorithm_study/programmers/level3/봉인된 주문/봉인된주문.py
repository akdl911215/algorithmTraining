def solution(n, bans):
    bans = set(bans)  # 삭제된 주문을 집합으로 저장하여 빠른 검색 가능

    def get_order(s):
        order = 0
        for length in range(1, len(s)):
            order += 26 ** length
        for i in range(len(s)):
            for c in range(ord('a'), ord(s[i])):
                order += 26 ** (len(s) - i - 1)
        return order + 1

    def find_nth(n):
        low = 0
        high = 26 ** 11  # 최대 11글자 주문까지 고려
        while low <= high:
            mid = (low + high) // 2
            # mid번째 주문을 찾는 로직 (생략)
            # mid번째 주문이 삭제되었는지 확인
            # 삭제되지 않았다면, 해당 주문의 순서를 계산하여 n과 비교
            # n보다 작으면 low = mid + 1, 크면 high = mid - 1
        return "결과 주문"

    return find_nth(n)