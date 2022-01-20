class Node {
    constructor(data) {
        this.data = data;  // 节点的数据域
        this.prev = null;  // 节点的指针域
        this.next = null;  // 节点的指针域
    }
}
class SingleList {
    constructor() {
        this.size = 0;  // 单链表的长度
        this.head = new Node('head');  // 表头节点
        this.currNode = '';  // 当前节点的指向
    }

    // 在单链表中寻找item元素
    find(item) {
        let currNode = this.head;

        while (currNode && (currNode.data !== item)) {
            currNode = currNode.next;
        }

        return currNode;
    }
    insert(item, element) { }  // 向单链表中插入元素
    remove(item) { }  // 在单链表中删除一个节点
    append(element) { }  // 在单链表的尾部添加元素
    findLast() { }  // 获取单链表的最后一个节点
    isEmpty() { }  // 判断单链表是否为空
    show() { }  // 显示当前节点
    getLength() { }  // 获取单链表的长度
    advance(n, currNode) { }  // 从当前节点向前移动n个位置
    display() { }  // 单链表的遍历显示
    clear() { }  // 清空单链表
}