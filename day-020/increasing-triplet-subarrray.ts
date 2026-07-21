// Triple nested loop - O(n³)
function increasingTripletNaive(nums: number[]): boolean {
    const len = nums.length;    
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] < nums[j]) {
                for (let k = j + 1; k < len; k++) {
                    if (nums[j] < nums[k]) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

function increasingTripletOptimal(nums: number[]): boolean {
    const len = nums.length;

    let left = Infinity;
    let right = Infinity;

    for (let i = 0; i < len; i++) {
        if (nums[i] <= left) {
            left = nums[i];
        } else if (nums[i] <= right) {
            right = nums[i];
        } else {
            return true;
        }
    }

    return false;
};