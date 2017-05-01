
===============Question================

# BINARY SEARCH QUESTION

Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

================Answer=================


```
var searchInsert = function(nums, target) {
    var i = 0;
    if(target<nums[0]) return 0; // if target is smallest, return 0th index
    if(target>nums[nums.length-1]) return nums.length; //if target largest, return last+1 index
    if(nums[0]===target) return i; //if target is first entry, return it
    if(nums[nums.length-1]===target) return nums.length-1; //if target is last entry, return it
    var ans=0; //ans is a global variable used by srch function
    //if none of the above conditions are true, then we run the srch function
    function srch(left,right,target){
        //if target is present in array and is neither last nor first, return its index
        if(nums.indexOf(target)!== -1) {ans = nums.indexOf(target); return nums.indexOf(target)}
        
        //EDGE CASES START HERE//
        //if edge case of recursion happens and the target is bigger than midpoint value, return mid+1 index
        if(right===left && nums[right]<target) {ans=right+1; return right+1;}
        //if midpoint value is larger than target, return mid index
        if(right===left) {ans=right; return right;}
        //EDGE CASES END HERE//
        
        i = Math.floor(left+(right-left)/2); //find midpoint
        //console.log("i is:",i,"left:",left,"right:",right);

        // if target is smaller than midpoint, search left half
        if(nums[i]>target) {ans = srch(left,i,target); console.log("num less t, ans:",ans);}
        //if target is larger than midpoint, search right half
        else if(nums[i]<target) {ans = srch(i+1,right,target);console.log("num grt t, ans:",ans);}
        return ans;
    }
    
    var result = srch(0,nums.length-1,target); // call to the srch function 
    console.log(result);
    return result;

};
```