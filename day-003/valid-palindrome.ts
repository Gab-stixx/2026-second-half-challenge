function isPalindrome(x: number): boolean {
    // Negative numbers are never palindromes
    if (x < 0) return false;

    // Numbers ending in 0 (except 0 itself) can't be palindromes
    if (x !== 0 && x % 10 === 0) return false;

    let reversedHalf = 0;

    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    // Even digits: x == reversedHalf
    // Odd digits: x == Math.floor(reversedHalf / 10)
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}