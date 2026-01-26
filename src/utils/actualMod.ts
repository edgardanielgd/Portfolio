// Fix weird javascript mod behavior...
export default function actualMod(n: number, m: number): number {
    return ((n % m) + m) % m;
}

