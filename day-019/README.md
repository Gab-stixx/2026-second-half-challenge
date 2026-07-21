# Day 19/184 - July 19, 2026

## Training: Same Tree Problem

### Problem
Determine if two binary trees are identical.
- Same structure
- Same values at each node
- Input: p = [1,2,3], q = [1,2,3]
- Output: true

### Solution Approach

```typescript
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // Both null = same
    if (p === null && q === null) {
        return true;
    }
    
    // One null, other not = different
    if (p === null || q === null) {
        return false;
    }
    
    // Check value + recursively check both subtrees
    return (
        p.val === q.val && 
        isSameTree(p.left, q.left) && 
        isSameTree(p.right, q.right)
    );
}
```

### How It Works