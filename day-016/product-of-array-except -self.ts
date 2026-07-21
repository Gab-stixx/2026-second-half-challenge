function productExceptSelf(nums: number[]): number[] {
    const len: number = nums.length;
    const res: number[] = new Array<number>(len);
    
    let leftProduct: number = 1;
    for (let i: number = 0; i < len; i++) {
        res[i] = leftProduct;
        leftProduct *= nums[i];
    }

    let rightProduct: number = 1;
    for (let i: number = len - 1; i >= 0; i--) {
        res[i] *= rightProduct;
        rightProduct *= nums[i];
    }
  
    return res;
};