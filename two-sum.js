// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//this soloution is two-pass hash table
// time complexity=O(n)
// space complexity=O(n)
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

  //this soloution is one-pass hash table
  // time complexity=O(n)
// space complexity=O(n)
  var twoSum = function(nums, target) {
  const map=new Map();
  for(let i=0;i<nums.length;i++) {
    const complement=target-nums[i];
    if(map.has(complement)){
        return([map.get(complement),i])
    }
    map.set(nums[i],i)
    
  }
  return [];
};
