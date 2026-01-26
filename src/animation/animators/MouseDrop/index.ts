import p5 from "p5";
import AnimationActivity from "../AnimationActivity";
import Drop from "./Drop";

class MouseDrop extends AnimationActivity {

    private drops: Drop[] = [];

    init(): void {
        super.init();
    }

    reset(): void {
        this.init();
    }

    draw(animationColor: string): void {
        for (const drop of this.drops) {
            const should_remove = drop.update();
            if (should_remove) {
                this.drops.splice(this.drops.indexOf(drop), 1);
            }
        }

        for (const drop of this.drops) {
            drop.draw(this.sk!, animationColor);
        }
    }

    onMousePressed(): void {
        this.drops.push(
            new Drop(
                new p5.Vector(
                    this.sk!.mouseX - this.width / 2, this.sk!.mouseY - this.height / 2
                )
            )
        );
    }


    onMoudeDragged(): void {
        this.drops.push(
            new Drop(
                new p5.Vector(
                    this.sk!.mouseX - this.width / 2, this.sk!.mouseY - this.height / 2
                )
            )
        );
    }
}

export default MouseDrop;

