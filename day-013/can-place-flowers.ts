function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    const flowerbedLength: number = flowerbed.length;

    for (let i = 0; i < flowerbedLength; i++) {
        const leftNeighbor: number = i === 0 ? 0 : flowerbed[i - 1];
        const rightNeighbor: number = i === flowerbedLength - 1 ? 0 : flowerbed[i + 1];

        if (leftNeighbor + flowerbed[i] + rightNeighbor === 0) {
            flowerbed[i] = 1; 
            n--; 
        }
    }
  
    return n <= 0;
}