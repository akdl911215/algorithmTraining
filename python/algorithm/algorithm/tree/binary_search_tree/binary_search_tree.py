class Node:
    def __init__(self, key):
        self.left = None
        self.right = None
        self.value = key

def insert(root, key):
    if root is None:
        return Node(key)

    if key < root.value:
        root.left = insert(root.left, key)
    else:
        root.right = insert(root.right, key)

    return root

def search(root, key):
    if root is None or root.value == key:
        return root
    if key < root.value:
        return search(root.left, key)
    else:
        return search(root.right, key)

# 중위 순회 (Inorder Traversal): 트리의 값을 정렬된 순서로 출력
def inorder(root):
    if root:
        inorder(root.left)
        print(root.value, end=" ")
        inorder(root.right)

# 트리 생성
root = None
values = [50, 30, 70, 20, 40, 60, 80]
for value in values:
    root = insert(root, value)

# 중위 순회 출력 (정렬된 순서로 출력)
print("Inorder Traversal of BST:")
inorder(root)
# 출력: 20 30 40 50 60 70 80

# 값 검색
key = 40
found = search(root, key)
if found:
    print(f"\nValue {key} found in BST.")
else:
    print(f"\nValue {key} not found in BST.")
