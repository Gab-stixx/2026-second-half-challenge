class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const dummyHead: ListNode = new ListNode();
    let currentNode: ListNode = dummyHead;
    let carryOver: number = 0;
  
    while (l1 !== null || l2 !== null || carryOver !== 0) {
        const digit1 = l1 !== null ? l1.val : 0;
        const digit2 = l2 !== null ? l2.val : 0;
        const sum = digit1 + digit2 + carryOver;
      
        carryOver = Math.floor(sum / 10);
        currentNode.next = new ListNode(sum % 10);
        currentNode = currentNode.next;
      
        
        l1 = l1 !== null ? l1.next : null;
        l2 = l2 !== null ? l2.next : null;
    }
  
    return dummyHead.next;
};