def fib(n, memo=None):
    if memo is None: memo = {}

    if n <= 1: return n

    if n not in memo:
        a = fib(n - 1, memo)
        b = fib(n - 2, memo)
        memo[n] = a + b

    return memo[n]

print(fib(5))