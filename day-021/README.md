# Day 21/184 - July 21, 2026

## Training: Symmetric Tree Problem

### Problem
Determine if a binary tree is symmetric (mirror image of itself).
- Input: [1,2,2,3,4,4,3]
- Output: true (tree is symmetric)

### Solution

```typescript
function isSymmetric(root: TreeNode | null): boolean {
    return mirror(root.left, root.right);
}

function mirror(left, right) {
    if (left === null && right === null) {
        return true;
    }
    
    if (left === null || right === null) {
        return false;
    }
    
    if (left.val !== right.val) {
        return false;
    }
    
    // Cross comparison: left.left with right.right (mirror)
    // And left.right with right.left (mirror)
    return mirror(left.left, right.right) && mirror(left.right, right.left);
}
```

### How It Works

**Mirror comparison (cross check):**