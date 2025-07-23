def f(x):
    return x**2

def g(x):
    return x + 1

def composite_fg(x): # (f∘g)(x) = f(g(x))
    return f(g(x))

def composite_gf(x): # (g∘f)(x) = g(f(x))
    return g(f(x))

print(composite_fg(2))  # 9
print(composite_gf(2))  # 5