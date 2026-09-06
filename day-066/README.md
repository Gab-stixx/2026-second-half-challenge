# Day 66/184 - September 4, 2026

## LeetCode 75: Decode String

### Problem
Decode encoded string where k[string] = repeat string k times.
- Input: "3[abc]2[d]"
- Output: "abcabcabcdd"

### Solution

```typescript
function decodeString(s: string): string {
    let countStack = [];
    let stringStack = [];
    let currString = "";
    let currNum = 0;

    for (const char of s) {
        if (/^\d$/.test(char)) {
            currNum = currNum * 10 + Number(char);
        } else if (char === "[") {
            countStack.push(currNum);
            stringStack.push(currString);
            currNum = 0;
            currString = "";
        } else if (char === "]") {
            let count = countStack.pop();
            let prev = stringStack.pop();
            currString = prev + currString.repeat(count);
        } else {
            currString += char;
        }
    }

    return currString;
}
```

### Trace

```
s = "3[abc]2[d]"

'3': currNum=3
'[': countStack=[3], stringStack=[""], reset
'a','b','c': currString="abc"
']': count=3, prev="" → currString="abcabcabc"
'2': currNum=2
'[': countStack=[2], stringStack=["abcabcabc"], reset
'd': currString="d"
']': count=2, prev="abcabcabc" → currString="abcabcabcdd"

return "abcabcabcdd" ✓
```


### Bug Caught
`currNum * 10 + char` → char is string → concatenation not addition.
Fixed: `currNum * 10 + Number(char)`

### Why Two Stacks?
Nested brackets need memory of outer context.
Stack saves and restores that context perfectly.

### Complexity
- Time: O(n × maxRepeat) | Space: O(n)

---

**Streak: 66/184** 🔥