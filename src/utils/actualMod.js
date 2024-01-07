// Fix weird javascript mod behavior...
export default function actualMod(n, m) {
    return ((n % m) + m) % m;
}