# Day 84/184 - September 22, 2026

## LeetCode 75: Path Sum III

### Problem

Count the number of paths in a binary tree whose values add up to `targetSum`.

The path does not have to start at the root or end at a leaf.

### Solution

```typescript
function pathSum(root: TreeNode | null, targetSum: number): number {
    const prefixSumCount: Record<number, number> = { 0: 1 };
    let count = 0;

    function depthFirstSearch(node: TreeNode | null, currentSum: number): void {
        if (node === null) return;

        currentSum += node.val;
        count += prefixSumCount[currentSum - targetSum] || 0;
        prefixSumCount[currentSum] = (prefixSumCount[currentSum] || 0) + 1;

        depthFirstSearch(node.left, currentSum);
        depthFirstSearch(node.right, currentSum);

        prefixSumCount[currentSum]--;
    }

    depthFirstSearch(root, 0);
    return count;
}
```

### Approach

Use DFS with a running `currentSum`.

For each node, check if `currentSum - targetSum` exists in the prefix sum map. If it does, a valid path ending at the current node exists.

### Key Insight

Prefix sums allow valid paths to be found during one DFS traversal instead of checking every possible path separately.

### Complexity

* Time: O(n)
* Space: O(n)

---

**Streak: 84/184** 🔥
**LeetCode 75 Progress: 36/75**
