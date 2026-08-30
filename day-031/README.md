# Day 31/184 - July 31, 2026

## LeetCode 75: Problem 13 - Container With Most Water

### Problem
Find two lines forming container that holds most water.
- Input: [1,8,6,2,5,4,8,3,7]
- Output: 49

### Solution

```typescript
function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxAreaValue = 0;

    while (left < right) {
        const currentArea = Math.min(height[left], height[right]) * (right - left);
        maxAreaValue = Math.max(maxAreaValue, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxAreaValue;
}
```

### How It Works

height = [1,8,6,2,5,4,8,3,7]

left=0(1), right=8(7): area = min(1,7) × 8 = 8
1 < 7 → move left

left=1(8), right=8(7): area = min(8,7) × 7 = 49
8 > 7 → move right

left=1(8), right=7(3): area = min(8,3) × 6 = 18
8 > 3 → move right

... continue until left >= right


### Greedy Insight
Shorter line limits area. Moving it inward might find taller line.
Moving taller line only decreases width. Skip it.

### Complexity
- **Time:** O(n) - single pass
- **Space:** O(1) - two pointers

### Revisit Value
First time: Learned pattern
This time: Recognized instantly
Growth: Pattern recognition is speed.

---

**Streak: 31/184** 🔥