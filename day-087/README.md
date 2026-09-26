# Day 87/184 - September 25, 2026

## LeetCode 75: Lowest Common Ancestor of a Binary Tree

### Problem

Find the lowest node in a binary tree that has both `p` and `q` as descendants.

A node can also be considered a descendant of itself.

### Progress

Still working on understanding the recursive DFS approach.

The main idea is to determine what each subtree finds:

* If `p` or `q` is found, return that node.
* If both sides return a node, the current node is the Lowest Common Ancestor.
* Otherwise, pass the result upward.

### Key Takeaway

The important part is understanding how information from the left and right recursive calls comes back to the current node.

### Status

Still learning and tracing the recursion before implementation.

---

**Streak: 87/184** 🔥
**LeetCode 75 Progress: 37/75**
