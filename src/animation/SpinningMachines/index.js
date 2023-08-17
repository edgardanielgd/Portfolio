import AnimationActivity from "../AnimationActivity";
import Gear from "./Gear";

const num_gears = 10;

class Gears extends AnimationActivity {
    init() {
        super.init();
        this.gears = [];
        for (let i = 0; i < num_gears; i++) {
            this.gears.push(new Gear(
                Math.random() * this.width,
                Math.random() * this.height,
                Math.random() * 50 + 10,
                this.theme === "dark" ? "#999696" : "#77c95d",
                Math.random() * 2 * Math.PI,
            ))
        }
        this.draw();
    }

    reset() {
        this.init();
    }

    draw() {
        for (const gear of this.gears) {
            gear.update(this.width, this.height);
            gear.draw(this.context);
        }
    }

    updateTheme(theme) {
        super.updateTheme(theme);
        for (const gear of this.gears) {
            gear.color = this.theme === "dark" ? "#999696" : "#77c95d";
        }
    }
}

export default Gears;