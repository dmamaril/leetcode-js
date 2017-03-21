/**
 * 
 * https://leetcode.com/problems/two-sum/#/description
 *
 * can i do this linearly with the assumption that the #s are NOT sorted;
 * yes
 *
 * retain diff of target - num and break when you find it;
 *
 * target = 8
 * num = 8, diff = 0
 * num = 7, diff = 1,
 * num = 4, diff = 4,
 * num = 2, diff = 6
 * etc.
 *
 * track state by creating a hash
 * where diff is the key and index of the num is the value;
 * when diff is found, return stored index and current index;
 *
 * Result: Pass
 * Runtime: O(n)
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    var hash = {};

    for (var i = 0 ; i < nums.length ; i++) {

        var num     = nums[i];
        var diff    = target - num;

        // use hasOwnProperty in case the return value is 0;
        // if num exists, we've found a matching diff
        if (hash.hasOwnProperty(num)) {
            return [hash[num], i];
        }

        // else store diff
        hash[diff] = i;
    }

    return [];
};