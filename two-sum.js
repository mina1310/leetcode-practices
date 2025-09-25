// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
var twoSum = function(nums, target) {
  const map=new Map();
  for(let i=0;i<nums.length;i++){
    map.set(nums[i],i);
  } 
  for(let i=0;i<nums.length;i++){
    const complement=target - nums[i];
    if(map.has(complement) && map.get(complement) !==i){
        return [i,map.get(complement)]
    }
  }
  return[]; 
};
