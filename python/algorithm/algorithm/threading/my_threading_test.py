import threading

counter = 0

def increment():
    global counter
    for _ in range(10000000):
        counter += 1

threads = []
for _ in range(2):
    t = threading.Thread(target=increment)
    threads.append(t)
    t.start()

for t in threads:
    t.join()

print("최종 counter 값:", counter)
