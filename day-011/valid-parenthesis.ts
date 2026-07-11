function isValid(s: string): boolean {
    const stack: string[] = [];
    const validPairs = new Set(["()", "[]", "{}"]);

    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            if (stack.length === 0 || !validPairs.has(stack[stack.length - 1] + char)) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
};