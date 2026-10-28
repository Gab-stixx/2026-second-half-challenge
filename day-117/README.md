# Day 117/184

## LeetCode 75: Smallest Number in Infinite Set

### Problem

Simulate infinite set {1,2,3...∞}

- popSmallest(): remove and return smallest
- addBack(num): add number back if not present

### Two Key Variables

**currentMin:** sliding door — everything from here onwards exists
**addedBack:** min heap — numbers added back, always < currentMin

### Solution

```typescript
class SmallestInfiniteSet {
  private currentMin: number;
  private addedBack: number[];

  constructor() {
    this.currentMin = 1;
    this.addedBack = [];
  }

  popSmallest(): number {
    if (this.addedBack.length > 0 && this.addedBack[0] < this.currentMin) {
      return this.pop();
    }
    return this.currentMin++;
  }

  addBack(num: number): void {
    if (num < this.currentMin && !this.addedBack.includes(num)) {
      this.push(num);
    }
  }
}
```

### Key Insight

currentMin only moves forward when popping from infinite sequence.
addBack never changes currentMin.
addedBack holds numbers that sneaked back behind the door.

### Complexity

- popSmallest: O(log n)
- addBack: O(log n)

---

**Streak: 117/184** 🔥
