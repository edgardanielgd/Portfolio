export const hex2rgb = (hex: string): [number, number, number] => {
    const [r, g, b] = hex.match(/\w\w/g)!.map(x => parseInt(x, 16));
    return [r, g, b];
}

