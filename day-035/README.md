# Day 35/184 - August 4, 2026

## Learning: Sliding Window Technique

### What is Sliding Window?

A technique using two pointers (left, right) to maintain a window of elements.
- Expand window: move right pointer
- Shrink window: move left pointer
- Track some state: sum, count, frequency, etc.

### Pattern

Initialize: left = 0, right = 0
While right < array.length:

Add element at right to window
While condition met:
Update answer
Remove element at left from window
Move left++
Move right++


### When to Use

- Find longest/shortest substring with condition
- Sum in subarray meeting criteria
- Character frequency in window
- Pattern matching in contiguous elements

### Sliding Window vs Two Pointers

| Technique | Problem | Direction |
|-----------|---------|-----------|
| Two Pointers | Find pairs | Converging from ends |
| Sliding Window | Find subarrays | Expanding/shrinking from left |

### Example Use Cases

1. **Longest Substring Without Repeating Characters**
   - Expand right, track chars
   - If duplicate found, shrink left

2. **Maximum Sum Subarray (fixed size)**
   - Slide window of size k
   - Calculate sum as you slide

3. **Minimum Window Substring**
   - Expand until condition met
   - Shrink while condition holds

### Key Differences from Two Pointers

- Two pointers: find specific targets
- Sliding window: find contiguous ranges
- Both use two pointers but logic differs

### Next Steps
- Solve first sliding window problem
- Understand window state management
- Apply to various substring/subarray problems

### Reflection

Learned a new pattern that extends two pointers.
Same building blocks (left, right pointers).
Different applications (windows vs pairs).

---

**Streak: 35/184** 🔥