function mergeAlternately(word1: string, word2: string): string {
    let w1: string[] = word1.split("");
    let w2: string[] = word2.split("");
    let w: string[] = [];
    const maxLength: number = Math.max(w1.length, w2.length);

    for (let i = 0; i < maxLength; i++) {
        if (w1[i] !== undefined) w.push(w1[i]);
        if (w2[i] !== undefined) w.push(w2[i]);
    }

    return w.join("");
};