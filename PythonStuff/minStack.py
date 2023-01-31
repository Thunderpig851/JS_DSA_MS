class MinStack:

    def __init__(self):
        self.stack = []
        self.min = []

    def push(self, val: int) -> None:
        try:
            if val < self.min[len(self.min) - 1]:
                self.min.append(val)
        except:
            self.min.append(val)

        self.stack.append(val)

    def pop(self) -> None:
        popped = self.stack.pop()

        if popped == self.min[len(self.min) - 1]:
            self.min.pop()

        return popped

    def top(self) -> int:
        return self.stack[len(self.stack) - 1]

    def getMin(self) -> int:
        return self.min[len(self.min) - 1]

minStack = MinStack()
minStack.push(20)
minStack.push(15)
minStack.push(12)
minStack.pop()
minStack.pop()
print(minStack.getMin())