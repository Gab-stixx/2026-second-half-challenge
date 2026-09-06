# Day 64/184 - September 2, 2026

## LeetCode 75: Asteroid Collision

### Problem
Find state of asteroids after all collisions.
- Positive = moving right, Negative = moving left
- Input: [5,10,-5] → [5,10] (10 destroys -5)
- Input: [8,-8] → [] (equal, both destroyed)

### Approach: Stack
- Positive asteroid → push to stack
- Negative asteroid → compare with top:
  - Top positive & smaller → pop, keep checking
  - Top positive & equal → pop, stop (both destroyed)
  - Top negative or empty → push (no collision)

### Complexity
- Time: O(n) | Space: O(n)

### Key Learning
Stack handles "most recent" comparisons naturally.
LIFO = perfect for collision problems.

### Note
PC battery spoilt yesterday. Repaired today. Back immediately.

---

**Streak: 64/184** 🔥