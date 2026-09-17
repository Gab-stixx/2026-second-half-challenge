# Day 79/184 - September 17, 2026

## LeetCode 75: Leaf-Similar Trees

### Problem

Determine whether two binary trees are leaf-similar.

Two trees are leaf-similar if their leaf nodes appear in the same order from left to right.

### Solution

```typescript
function getLeaves(node: TreeNode | null, leaves: number[]): void {
    if (node === null) return;

    if (node.left === null && node.right === null) {
        leaves.push(node.val);
        return;
    }

    getLeaves(node.left, leaves);
    getLeaves(node.right, leaves);
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    let leaves1 = [];
    let leaves2 = [];

    getLeaves(root1, leaves1);
    getLeaves(root2, leaves2);

    return leaves1.join() === leaves2.join();
};
```

### Approach

Use DFS to traverse both trees and collect only their leaf nodes.

Then compare the two leaf sequences.

### Why a Helper Function?

The same leaf-collecting logic is needed for both trees, so a separate `getLeaves()` function keeps the main function simple.

### Key Insight

For leaf-similar trees, the structure of the trees doesn't matter — only the left-to-right sequence of their leaves matters.

### Complexity

* Time: O(n + m)
* Space: O(n + m)

---

**Streak: 79/184** 🔥
**LeetCode 75 Progress: 34/75**
