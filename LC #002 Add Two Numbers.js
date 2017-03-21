/**
 *
 * https://leetcode.com/problems/add-two-numbers/#/description
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 *
 * (342) + (465) = 807
 * 
 * Output: 7 -> 0 -> 8
 *
 * add sum of each value in place,
 * if there sum if both numbers are > 10,
 * retain carryover to be added to later sum
 *
 * due to objects being just references,
 * any changes to current will reflect to result
 *
 * initialize result with leading 0
 * for an easy return value of result.next;
 *
 * NOTE:
 *     - that node.val can be 0 and return falsy if checked lazily
 *     - the largest carry is 1 as we're adding single digit nums (max sum: 18)
 *
 * Result: Pass
 * Runtime: O(n) 
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    var result  = new ListNode(0);
    var current = result;
    var l1_node = l1;
    var l2_node = l2;
    var carry   = 0;

    while (l1_node || l2_node) {

        var l1_val, l2_val, sum;

        if (l1_node && typeof l1_node.val === 'number') {

            l1_val = l1_node.val;
            l1_node = l1_node.next;

        } else {

            l1_val = 0;
        }


        if (l2_node && typeof l2_node.val === 'number') {

            l2_val = l2_node.val;
            l2_node = l2_node.next;

        } else {

            l2_val = 0;
        }

        // add carryover from previous sums
        sum = l1_val + l2_val + carry;

        if (sum < 10) {

            // reset carry;
            carry = 0;

        } else { 

            // take modulo to get leftover after carry
            carry = 1;
            sum %= 10;
        }

        // move pointers;
        current.next = new ListNode(sum);
        current = current.next;
    }

    // add final carry;
    if (carry) {
        current.next = new ListNode(1);
    }

    return result.next;
};


var ListNode = function (val) {
    this.val = val;
    this.next = null;
};

ListNode.prototype.addToTail = function (val) {
    if (this.next === null) {
        this.next = new ListNode(val);
    } else {
        this.next.addToTail(val);
    }
};

var createList = function (arr) {

    var list = new ListNode(arr[0]);
    var node = list;

    for (var i = 1 ; i < arr.length ; i++) {

        node.next   = new ListNode(arr[i]);
        node        = node.next;
    }

    return list;
}

// l1 = [2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9]
// l2 = [5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9]

l1 = [2,4,3];
l2 = [5,6,4];

addTwoNumbers(createList(l1), createList(l2));