# Day 6/184 - July 6, 2026

## LeetCode #2: Add Two Numbers

### Problem
- Two non-empty linked lists representing numbers in reverse order
- Add the two numbers, return sum as linked list
- Example: [2,4,3] + [5,6,4] = [7,0,8] (342 + 465 = 807)

### Solution
- Traverse both lists simultaneously
- Add corresponding digits + carry-over from previous sum
- Create new node for each digit of result
- Handle remaining digits and final carry

### Complexity
- Time: O(max(n,m)) where n,m are list lengths
- Space: O(1) excluding output

### Key Learning
Working with given function signatures teaches you to think within constraints.

---

**Streak: 6/184** 🔥