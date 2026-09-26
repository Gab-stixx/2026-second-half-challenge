# Day 88/184 - September 26, 2026

## LeetCode 75: Lowest Common Ancestor of a Binary Tree

### Problem

Find the lowest common ancestor of two nodes `p` and `q` in a binary tree.

### Solution

```typescript
function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
): TreeNode | null {
    if (root === null) return null;
    if (root === p || root === q) return root;

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left && right) return root;
    return left || right;
};
```

### Approach

Use recursive DFS.

If the current node is `p` or `q`, return it.

Then search both subtrees:

* If both return a node, the current node is the LCA.
* If only one side returns a node, pass that node upward.
* If neither finds anything, return `null`.

### Key Insight

The recursion lets each subtree report whether it found `p` or `q`. When both sides report a node, the current node is their lowest common ancestor.

### Complexity

* Time: O(n)
* Space: O(h)

---

## DFS Section Complete ✅

This was the last problem in the DFS section, and it was a straightforward recursive solution once the logic clicked.

---

**Streak: 88/184** 🔥
**LeetCode 75 Progress: 38/75**
