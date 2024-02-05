def solution(data, ext, val_ext, sort_by):
    answer = []

    ext_pivot = 0, # 기본값 코드번호
    if ext == "date":
        ext_pivot = 1
    elif ext == "maximum":
        ext_pivot = 2
    elif ext == "remain":
        ext_pivot = 3

    sort_pivot = 0
    if sort_by == "date":
        sort_pivot = 1
    elif sort_by == "maximum":
        sort_pivot = 2
    elif sort_by == "remain":
        sort_pivot = 3

    filter_arr = [el for el in data if el[ext_pivot] < val_ext]

    if filter_arr:
        answer = sorted(filter_arr, key=lambda x:x[sort_pivot])
    else:
        [[]]

    return answer

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