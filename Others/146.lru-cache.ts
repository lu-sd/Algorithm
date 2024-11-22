// @leet start
class LNode {
  key: number;
  value: number;
  pre: LNode | null = null;
  next: LNode | null = null;
  constructor(key = 0, value = 0) {
    this.value = value;
    this.key = key;
  }
}
class LRUCache {
  capacity: number;
  dummy: LNode;
  map: Map<number, LNode>;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.dummy = new LNode();
    this.dummy.pre = this.dummy;
    this.dummy.next = this.dummy;
    this.map = new Map();
  }

  get(key: number): number {
    if (!this.map.has(key)) return -1;
    const node = this.map.get(key)!;
    this.update(node);
    return node.value;
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key)!;
      node.value = value;
      this.update(node);
      return;
    }
    const node = new LNode(key, value);
    this.map.set(key, node);
    this.putTop(node);
    if (this.map.size > this.capacity) {
      const last = this.dummy.pre;
      this.map.delete(last.key);
      this.remove(last);
    }
  }

  update(x: LNode) {
    this.remove(x);
    this.putTop(x);
  }
  remove(x: LNode) {
    x.pre.next = x.next;
    x.next.pre = x.pre;
  }
  putTop(x: LNode) {
    x.pre = this.dummy;
    x.next = this.dummy.next;
    x.pre.next = x;
    x.next.pre = x;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @leet end

