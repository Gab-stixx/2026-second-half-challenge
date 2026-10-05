# Day 96/184 - October 5, 2026

## LeetCode 75: Delete Node in a Binary Search Tree

### Problem

Given the root of a Binary Search Tree and a key, delete the node with that key while maintaining the properties of the BST.

### Solution

```typescript
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    if (root === null) return null;

    if (key < root.val) {
        root.left = deleteNode(root.left, key);
    } else if (key > root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // Case 1 & 2
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;

        // Case 3
        let successor = findMin(root.right);
        root.val = successor.val;
        root.right = deleteNode(root.right, successor.val);
    }

    return root;
};

function findMin(root: TreeNode | null) {
    while (root.left !== null) {
        root = root.left;
    }

    return root;
}
```

### Approach

First, use the BST property to locate the node.

* If `key < root.val`, search the left subtree.
* If `key > root.val`, search the right subtree.
* If `key === root.val`, the node has been found.

After finding the node, there are three cases.

### Case 1: No Children

The node is a leaf, so returning `null` removes it from the tree.

### Case 2: One Child

If the node has only one child, return that child.

The child takes the deleted node's position while maintaining the BST structure.

### Case 3: Two Children

This is the main part of the problem.

When the node has two children, find the smallest value in its right subtree.

This is called the inorder successor.

Replace the current node's value with the successor's value, then recursively delete the original successor from the right subtree.

This keeps the BST property intact.

### Key Insight

For a node with two children, replacing it with the smallest value from its right subtree allows us to delete the node without breaking the ordering of the BST.

### Complexity

* Time: O(h)
* Space: O(h) due to recursion

Where `h` is the height of the tree.

### Milestone

BST section completed ✅

Trees section completed ✅

---

**Streak: 96/184** 🔥
