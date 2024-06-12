import time

year = int(input(2000)) # 출생연도
age_type = input("Korea") # 나이의 종류

if age_type == "Korea":
    answer = time.localtime().tm_year - year + 1

elif age_type == "Year":
    answer = time.localtime().tm_year.today().year - year

print(answer)

# https://school.programmers.co.kr/learn/courses/30/lessons/250131