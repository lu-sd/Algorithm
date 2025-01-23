// @leet start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
  let f = head;
  let s = head;
  while (f && f.next) {
    f = f.next.next;
    s = s.next;
    if (f === s) return true;
  }

  return false;
}
// @leet end

