# Day 95/184 - October 3, 2026

## LeetCode 75: Search in a Binary Search Tree

### Problem

Given the root of a Binary Search Tree and a value, find the node containing that value and return the subtree rooted at that node.

### Solution

```typescript
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (root === null) return null;      
    if (root.val === val) return root;  

    if (val < root.val) {
        return searchBST(root.left, val);
    } else {
        return searchBST(root.right, val); 
    }
};
```

### Approach

* Start at the root.
* If the current node contains the target, return it.
* If the target is smaller, search the left subtree.
* If the target is larger, search the right subtree.
* Continue until the value is found or the tree ends.

### Key Insight

The BST property tells us which direction to search at every node, so we don't need to visit every node.

### Complexity

* Time: O(h)
* Space: O(h), due to recursion

---

**Streak: 95/184** 🔥
