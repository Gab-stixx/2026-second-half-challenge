# Day 65/184 - September 3, 2026

## LeetCode 75: Asteroid Collision

### Problem
Find state of asteroids after all collisions.
- Input: [5,10,-5] → [5,10]
- Input: [8,-8] → []
- Input: [10,2,-5] → [10]

### Rules
- \+ meets \+ → no collision
- \- meets \- → no collision
- \- meets \+ → no collision (moving apart)
- \+ meets \- → COLLISION

### Solution

```typescript
function asteroidCollision(asteroids: number[]): number[] {
    const stack: number[] = [];

    for (const asteroid of asteroids) {
        let colliding = true;

        while (colliding && stack.length > 0 && asteroid < 0 && stack[stack.length - 1] > 0) {
            const top = stack[stack.length - 1];

            if (Math.abs(asteroid) > top) {
                stack.pop();
            } else if (Math.abs(asteroid) === top) {
                stack.pop();
                colliding = false;
            } else {
                colliding = false;
            }
        }

        if (colliding) {
            stack.push(asteroid);
        }
    }

    return stack;
}
```

### Trace

```
[5,10,-5]
asteroid=5: stack=[5]
asteroid=10: stack=[5,10]
asteroid=-5: |-5|(5) < top(10) → colliding=false
return [5,10] ✓

[8,-8]
asteroid=8: stack=[8]
asteroid=-8: |-8|(8) === top(8) → both destroyed
return [] ✓
```


### Complexity
- Time: O(n) | Space: O(n)

### Key Learning
Stack handles "most recent" comparisons naturally.
Right tool = simple solution.

---

**Streak: 65/184** 🔥
