# Day 92/184 - September 30, 2026

## LeetCode 75: Maximum Level Sum of a Binary Tree

### Problem

Given the root of a binary tree, find the level with the maximum sum of node values. If there are multiple levels with the same sum, return the smallest level number.

### Solution

```typescript
function maxLevelSum(root: TreeNode | null): number {
    if (root === null) return 1;

    const queue: TreeNode[] = [root];
    let maxSum = -Infinity;
    let maxLevel = 1;
    let currentLevel = 1;

    while (queue.length > 0) {
        let levelSize = queue.length;
        let levelSum = 0;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift()!;
            levelSum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (levelSum > maxSum) {
            maxSum = levelSum;
            maxLevel = currentLevel;
        }

        currentLevel++;
    }

    return maxLevel;
}
```

### Approach

* Use BFS to traverse the tree level by level.
* Store the number of nodes in the current level.
* Calculate the sum of each level.
* Keep track of the highest sum and its level number.

### Key Insight

BFS naturally separates the tree into levels, making it easy to calculate and compare the sum of each level.

### Complexity

* Time: O(n)
* Space: O(n)

### Milestone

* BFS section completed ✅
* 40 LeetCode problems completed ✅
* 92/184 days completed
* Exactly halfway through the challenge 🔥

---

**Streak: 92/184** 🔥
