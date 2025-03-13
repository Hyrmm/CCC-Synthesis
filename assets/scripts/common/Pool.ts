class ObjectPool<T> {

    private available: T[] = []
    private inUse: Set<T> = new Set()

    constructor(initialObjects: T[]) {
        this.available = [...initialObjects]
    }

    acquire(): T | null {

        if (this.available.length === 0) {
            return null; // 没有可用对象
        }

        const index = Math.floor(Math.random() * this.available.length)
        const obj = this.available.splice(index, 1)[0]
        this.inUse.add(obj)
        return obj
    }

    release(obj: T): void {
        if (this.inUse.has(obj)) {
            this.inUse.delete(obj)
            this.available.push(obj)
        }
    }

    getAvailableCount(): number {
        return this.available.length
    }

    getInUseCount(): number {
        return this.inUse.size
    }
}
