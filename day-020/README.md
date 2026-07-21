# Day 20/184 - July 20, 2026

## LeetCode 75: Problem 9 - Increasing Triplet Subsequence

### Problem
Find if array contains three indices i < j < k where nums[i] < nums[j] < nums[k].
- Input: [1,2,0,3]
- Output: true (indices 0,1,3: 1 < 2 < 3)

### Approach 1: Naive (FAILED)

```typescript
// Triple nested loop - O(n³)
for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
        if (nums[i] < nums[j]) {
            for (let k = j + 1; k < len; k++) {
                if (nums[j] < nums[k]) {
                    return true;
                }
            }
        }
    }
}
return false;
```

**Result:** Time Limit Exceeded on large testcase ❌

---

### Approach 2: Optimal (ACCEPTED)

```typescript
let firstSmallest = Infinity;
let secondSmallest = Infinity;

for (const num of nums) {
    if (num <= firstSmallest) {
        firstSmallest = num;
    } else if (num <= secondSmallest) {
        secondSmallest = num;
    } else {
        return true;  // Found triplet
    }
}
return false;
```

**Result:** Accepted, 0ms ✅

---

### How Optimal Works

**Key Insight:** Don't track all three values. Track smallest and second-smallest.