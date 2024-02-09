def solution(data, ext, val_ext, sort_by):
    ext_pivot = {'code': 0, 'date': 1, 'maximum': 2, 'remain': 3}

    return sorted([el for el in data if el[ext_pivot[ext]] < val_ext], key=lambda x:x[ext_pivot[sort_by]])

# data > 정렬한 데이터들이 담긴 이차원 정수 리스트
# -> data 원소 > 코드번호(code), 제조일(date), 최대 수량(maximum), 현재 수량(remain)
# ext > 어떤 정보를 기준으로 데이터를 뽑아낼지를 의미하는 문자열
# val_ext > 뽑아낼 정보의 기준값을 나타내는 정수
# sort_by > 정보를 정렬할 기준이 되는 문자열
print(
    solution(
        [[1, 20300104, 100, 80], [2, 20300804, 847, 37], [3, 20300401, 10, 8]],
        "date",
        20300501,
        "remain"
            )
    )
# [[3,20300401,10,8],[1,20300104,100,80]]

# https://school.programmers.co.kr/learn/courses/30/lessons/250121?language=python3