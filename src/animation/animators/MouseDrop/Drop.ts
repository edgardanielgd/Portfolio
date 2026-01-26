import p5 from "p5";

const RADIUS_INITIAL = 10;
const RADIUS_MAX = 200;
const RADIUS_INCREMENT = 1;

class Drop {
    private position : p5.Vector;
    private radius: number;

    constructor(
        position_initial: p5.Vector
    ) {
        this.position = position_initial;
        this.radius = RADIUS_INITIAL;
    }

    draw(sk: p5, color: string): void {
        sk.push();
        const alpha = Math.floor((RADIUS_MAX - this.radius) / RADIUS_MAX * 255);
        const alphaHex = alpha.toString(16).padStart(2, '0');
        sk.stroke(`${color}${alphaHex}`);
        sk.strokeWeight(2);
        sk.noFill();
        sk.translate(this.position.x, this.position.y);
        sk.circle(0, 0, this.radius);
        sk.pop();
    }

    update(): boolean {
        this.radius += RADIUS_INCREMENT;
        if (this.radius > RADIUS_MAX) {
            return true;
        }

        return false;
    }
}

export default Drop;