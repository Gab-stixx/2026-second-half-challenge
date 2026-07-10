function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let noOfChildren: number = candies.length;
    let result: boolean[] = [];
    const maxCandies: number = Math.max(...candies)

    for (let i = 0; i < noOfChildren; i++) {
        if (candies[i] + extraCandies >= maxCandies) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
};