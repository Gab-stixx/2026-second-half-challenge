function reverseVowels(s: string): string {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    let word = s.split("");
    let len = word.length;
    let left = 0;
    let right = len - 1;

    while (left < right) {
        if (!vowels.has(word[left])) {
            left++;
        } else if (!vowels.has(word[right])) {
            right--;
        } else {
            [word[left], word[right]] = [word[right], word[left]];
            left++;
            right--;
        }
    }

    return word.join("");
};