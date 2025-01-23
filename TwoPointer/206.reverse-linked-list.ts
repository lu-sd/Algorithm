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

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  let last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
}
// @leet end

