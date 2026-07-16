function reverseWords(s: string): string {
    let word = s.trim().split(/\s+/);
    let n = word.length;

    let left = 0;
    let right = n - 1;

    while (left < right) {
        [word[left], word[right]] = [word[right], word[left]];
        left++;
        right--;
    }

    return word.join(" ");
};
