# Day 11/184 - July 11, 2026

## Training: Stacks & Queues

### Learned Today
- **Stacks (Array Implementation)**
  - Push: O(1), Pop: O(1)
  - LIFO: Last In, First Out
  
- **Stacks (Linked List Implementation)**
  - More flexible, no size limit
  - Same operations, better for dynamic sizing

- **Queues (Array Implementation)**
  - Enqueue: O(1), Dequeue: O(n) (shifting overhead)
  - FIFO: First In, First Out

- **Queues (Linked List Implementation)**
  - Dequeue: O(1) - no shifting needed
  - Better than array for queues

### LeetCode Problems

#### Problem 1: Valid Parentheses
- Check if brackets are balanced and in correct order
- Approach: Use stack to match pairs
- Time: O(n), Space: O(n)
- ✅ Solved

#### Problem 2: Implementing Queue from Two Stacks
- Use two stacks to simulate queue behavior
- Push stack: for enqueue, Pop stack: for dequeue
- When pop stack empty, reverse push stack
- Time: O(1) amortized, Space: O(n)
- ✅ Solved

### Key Learning
- Choose data structure based on access pattern
- Stacks excel at matching/reversal problems
- Two-stack queue is elegant problem-solving

---

**Streak: 11/184** 🔥