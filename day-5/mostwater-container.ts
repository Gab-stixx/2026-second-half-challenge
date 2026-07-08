function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;

    let maxAreaValue = 0;

    while (left < right) {
        const currentArea: number = Math.min(height[left], height[right]) * (right - left);
        maxAreaValue = Math.max(maxAreaValue, currentArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxAreaValue;
};