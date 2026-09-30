# Day 91/184 - September 29, 2026

## LeetCode 75: Binary Tree Right Side View

### Problem

Given the root of a binary tree, return the values of the nodes that can be seen from the right side, ordered from top to bottom.

### Solution

```typescript
function rightSideView(root: TreeNode | null): number[] {
    if (root === null) return [];

    const result: number[] = [];
    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift()!;

            if (i === levelSize - 1) {
                result.push(node.val);
            }

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return result;
}
```

### Approach

* Use BFS to traverse the tree level by level.
* Store the number of nodes in the current level.
* The last node processed in each level is the node visible from the right side.
* Add that node's value to the result.

### Key Insight

The rightmost visible node is simply the last node visited at each level during BFS.

### Complexity

* Time: O(n)
* Space: O(n)

---

**Streak: 91/184** 🔥
