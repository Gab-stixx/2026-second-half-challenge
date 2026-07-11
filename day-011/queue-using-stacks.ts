class MyQueue {
    private inputStack: number[];
    private outputStack: number[];
    
    constructor() {
        this.inputStack = [];
        this.outputStack = [];
    }

    private transferStacks(): void {
        if (this.outputStack.length === 0) {
            while (this.inputStack.length > 0) {
                this.outputStack.push(this.inputStack.pop()!);
            }
        }
    }

    push(x: number): void {
        this.inputStack.push(x);
    }

    pop(): number {
        this.transferStacks();
        return this.outputStack.pop()!;
    }

    peek(): number {
        this.transferStacks();
        return this.outputStack[this.outputStack.length - 1];
    }

    empty(): boolean {
        return this.outputStack.length === 0 && this.inputStack.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */