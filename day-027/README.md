# Day 27/184 - July 27, 2026

## LeetCode 75: Problem 10 - String Compression

### Problem
Compress character array in-place.
- Input: ['a','a','b','b','c','c','c']
- Output: ['a','2','b','2','c','3']
- Return: 6 (compressed length)

### Solution

```typescript
function compress(chars: string[]): number {
    let readPtr = 0;
    let writePtr = 0;

    while (readPtr < chars.length) {
        const current = chars[readPtr];
        let count = 0;

        // Count consecutive same characters
        while (readPtr < chars.length && chars[readPtr] === current) {
            count++;
            readPtr++;
        }

        // Write character
        chars[writePtr] = current;
        writePtr++;

        // Write count (if > 1, write each digit)
        if (count > 1) {
            const countString = count.toString();
            for (const digit of countString) {
                chars[writePtr] = digit;
                writePtr++;
            }
        }
    }

    return writePtr;
}
```

### How It Works