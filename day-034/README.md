# Day 34/184 - August 3, 2026

## LeetCode 75: Problem 14 - Max Number of K-Sum Pairs

### Problem
Find maximum pairs that sum to k and remove them.
- Input: nums = [1,2,3,4], k = 5
- Output: 2 (pairs: 1+4, 2+3)

### Solution

```typescript
function maxOperations(nums: number[], k: number): number {
    nums.sort((a, b) => a - b);
    
    let left = 0;
    let right = nums.length - 1;
    let noOfOperations = 0;
    
    while (left < right) {
        const sum = nums[left] + nums[right];
        
        if (sum === k) {
            left++;
            right--;
            noOfOperations++;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }
    
    return noOfOperations;
}
```

### How It Works

nums = [1,2,3,4], k = 5
After sort: [1,2,3,4]

left=0, right=3: sum = 1+4 = 5 ✓
→ operations=1, left++, right--

left=1, right=2: sum = 2+3 = 5 ✓
→ operations=2, left++, right--

left > right → stop

return 2


### Complexity
- **Time:** O(n log n) sort + O(n) two pointers
- **Space:** O(1) excluding sort

### Key Insight
Sorted array + two pointers = all pairs found.
When pair found, both pointers move.
No pair missed.

---

**Streak: 34/184** 🔥