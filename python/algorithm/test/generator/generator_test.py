from algorithm.test.generator.generator_fun import get_natural_number

g = get_natural_number()
for _ in range(0, 100):
    print(next(g))