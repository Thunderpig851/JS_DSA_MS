def isValid(string):
    stack = []

    for index, char in enumerate(string):
        if char == '(' or char == '{' or char =='[':
            stack.append(char)
        elif len(stack) == 0 & (char == ')' or char == '}' or char == ']'):
            return False
        elif char == ')' and stack[-1] == '(':
            stack.pop()
        elif char == '}' and stack[-1] == '{':
            stack.pop()
        elif char ==']' and stack[-1] == '[':
            stack.pop()
        elif stack[-1] != char:
            return False

    return len(stack) == 0
        
print(isValid('(])'))
print(isValid('()')) 
print(isValid('([)]')) 
print(isValid('((()()(('))
print(isValid('()())))'))