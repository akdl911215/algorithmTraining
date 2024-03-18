num_str = "1234567"
min_sum = None

for i in range(1, len(num_str)):
    for j in range(i + 1, len(num_str)):
        current_sum = int(num_str[:i]) + int(num_str[i:j]) + int(num_str[j:])
        if min_sum is None or current_sum < min_sum:
            min_sum = current_sum


print(f"최소 합: {min_sum}")