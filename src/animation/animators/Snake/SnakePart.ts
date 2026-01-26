import p5 from "p5";

class SnakePart {
    private position: p5.Vector;
    private velocity: p5.Vector;
    private movement_speed: number;
    private radius: number;
    private segment_length: number;

    constructor(
        position_initial: p5.Vector,
        velocity_initial: p5.Vector,
        movement_speed_initial: number,
        radius_initial: number,
        segment_length_initial: number,
    ) {
        this.position = position_initial;
        this.velocity = velocity_initial;
        this.movement_speed = movement_speed_initial;
        this.radius = radius_initial;
        this.segment_length = segment_length_initial;
    }

    draw = (sk: p5, color: string, ): void => {
        sk.push();
        sk.fill(color);
        sk.noStroke();
        const theta = Math.acos(this.velocity.z);
        const phi = (this.velocity.y > 0 ? -1 : 1) * Math.asin(this.velocity.x / Math.sqrt(1 + this.velocity.y ** 2));
        sk.rotateY(theta);
        sk.rotateX(phi);
        sk.translate(this.position.x, this.position.y, this.position.z);
        sk.cylinder(this.radius, this.segment_length);
        sk.pop();
    }

    update = (width: number, height: number, front_part: SnakePart | null): void => {
        this.position.add(this.velocity.copy().mult(this.movement_speed));

        if (front_part) {
            this.velocity = front_part.position.copy().sub(this.position.copy()).normalize();
        }
    }

    onKeyPressed = (direction: string): void => {
        if (direction === 'up') {
            this.velocity = new p5.Vector(0, 1, 0);
        } else if (direction === 'down') {
            this.velocity = new p5.Vector(0, -1, 0);
        } else if (direction === 'left') {
            this.velocity = new p5.Vector(-1, 0, 0);
        } else if (direction === 'right') {
            this.velocity = new p5.Vector(1, 0, 0);
        }
    }
}

export default SnakePart;

