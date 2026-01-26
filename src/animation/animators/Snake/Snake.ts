import p5 from "p5";
import SnakePart from "./SnakePart";

class Snake {
    private parts: SnakePart[] = [];
    private number_of_parts: number;
    private movement_speed: number;

    constructor(
        number_of_parts: number,
        movement_speed: number,
    ) {
        this.number_of_parts = number_of_parts;
        this.movement_speed = movement_speed;
        const initial_position = new p5.Vector(0, 0, 0);
        const initial_direction = new p5.Vector(-1, 1, 0);

        const normalized_initial_direction = initial_direction.normalize();
        const radius = Math.random() * 90 + 10;
        const segment_length = Math.random() * 10 + 10;

        for (let i = 0; i < this.number_of_parts; i++) {
            const part_initial_position = initial_position.copy().add(
                normalized_initial_direction.copy().mult(segment_length * i)
            );
            this.parts.push(new SnakePart(
                part_initial_position.copy(),
                normalized_initial_direction.copy(),
                this.movement_speed,
                radius,
                segment_length
            ));
        }
    }

    draw = (sk: p5, color: string): void => {
        sk.push();
        for (const part of this.parts) {
            part.draw(sk, color);
        }
        sk.pop();
    }

    update = (width: number, height: number): void => {
        let front_part: SnakePart | null = null;
        for (let i = this.parts.length - 1; i >= 0; i--) {
            this.parts[i].update(width, height, front_part ? front_part : null);
            front_part = this.parts[i];
        }
    }

    onKeyPressed = (direction: string): void => {
        if (direction === 'ArrowUp') {
            this.parts[this.parts.length - 1].onKeyPressed('up');
        } else if (direction === 'ArrowDown') {
            this.parts[this.parts.length - 1].onKeyPressed('down');
        } else if (direction === 'ArrowLeft') {
            this.parts[this.parts.length - 1].onKeyPressed('left');
        } else if (direction === 'ArrowRight') {
            this.parts[this.parts.length - 1].onKeyPressed('right');
        }
    }
}

export default Snake;

