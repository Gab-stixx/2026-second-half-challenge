# Day 69/184 - September 7, 2026

## LeetCode 75: Dota2 Senate

### Problem

Simulate senators from Radiant and Dire banning each other until only one party remains.

Example:

* `"RD"` → `"Radiant"`
* `"RDD"` → `"Dire"`

### Solution

```typescript
function predictPartyVictory(senate: string): string {
    const n: number = senate.length;
    let r = [];
    let d = [];

    for (let i = 0; i < n; i++){
        if (senate[i] === "R") {
            r.push(i);
        } else {
            d.push(i);
        }
    }

    while (r.length > 0 && d.length > 0) {
        let r_index = r.shift();
        let d_index = d.shift();

        if (r_index < d_index) {
            r.push(r_index + n);
        } else {
            d.push(d_index + n);
        }
    }

    return r.length > 0 ? "Radiant": "Dire";
};
```

### Trace

```text
senate = "RDD"
R queue = [0]
D queue = [1,2]

R: 0 < 1 → R bans D
R queue = [3]
D queue = [2]

R: 3 > 2 → D bans R
R queue = []
D queue = [5]

R queue empty → Dire wins
```

### Why Queue?

Keep Radiant and Dire senators in separate queues.

The senator with the smaller index gets to act first.
The surviving senator is added back with `index + n` for their next round.

### Key Insight

`index + n` represents the next round.

It allows the surviving senator to take another turn while keeping the correct order of turns.

### Complexity

* Time: O(n)
* Space: O(n)

---

**Streak: 69/184** 🔥
