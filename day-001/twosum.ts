function twoSum(nums: number[], target: number): number[] {
    // Stores: Value -> Index
    const seenNumbers = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // If we've already seen the number needed to reach the target, good!
        if (seenNumbers.has(complement)) {
            return [seenNumbers.get(complement)!, i];
        }

        // Otherwise, remember this number and its index
        seenNumbers.set(nums[i], i);
    }

    return [];
}

let arr = [2, 7, 11, 15];
console.log(twoSum(arr, 9));