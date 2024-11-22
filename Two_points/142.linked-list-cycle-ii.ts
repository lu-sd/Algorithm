import { ListNode } from "./type";
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

function detectCycle(head: ListNode | null): ListNode | null {
  let f = head;
  let s = head;
  while (f && f.next) {
    f = f.next.next;
    s = s!.next;
    if (f === s) {
      s = head;
      while (s !== f) {
        s = s!.next;
        f = f.next;
      }
    }
  }

  return s;
}
// @leet end

