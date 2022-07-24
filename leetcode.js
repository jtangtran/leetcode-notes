//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
//First Submission:
//Time: o(nlogn) 
var containsDuplicate = function(nums) {
    let sortedArr = nums.sort((a,b) => a-b);
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] == sortedArr[i+1]) {
            return true;
        }
    }
    return false;
};

//Second Submission:
//Time: o(n) as we are only scanning the array once so dependent of the array size  
//Space: o(n) - had to create a set and the memory the set could be up to the size of the array
var containsDuplicate = function(nums) {
    let set = new Set();
    for (let element of nums) {
        if (set.has(element)) {
                return true;
        } 
        set.add(element)
    }
    return false;
};

//Third Submission:
//Notes: Set can only contain unique values/removes duplicate values
var containsDuplicate = function(nums) {   
    return new Set(nums).size !== nums.length;
};



