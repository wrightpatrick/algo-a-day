/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var isPalindrome = function(head) {
    let left = head;
    let right = head;
    let node = head;
    let nullNode = null;
    while(right && right.next){
        node = left;
        left = left.next;
        right = right.next.next;
        node.next = nullNode;
        nullNode = node
    }
    if(right){
        left = left.next;
    }
    console.log(node, left)
    
    while(node && left){
        if(node.val !== left.val){
            return false;
        }
        node = node.next;
        left = left.next
    }
    return true;
};

head = new ListNode(1,2);
console.log(isPalindrome(head));