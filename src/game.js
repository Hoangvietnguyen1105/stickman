import * as PIXI from 'pixi.js';
import { Sticky } from './sticky';

export class Game {
    static init() {
        return new Promise((resolve, reject) => {
            this.app = new PIXI.Application({
                width: innerWidth,
                height: innerHeight,
                backgroundColor: 0x1099bb,
                resizeTo: window
            });
            this.test = "abc"
            document.body.appendChild(this.app.view);

            PIXI.Assets.load('../assets/images/animation.json').then(() => {
                this.runFrame = [];
                this.punchFrame = [];

                let i;

                for (i = 0; i < 8; i++) {
                    const texture = PIXI.Texture.from(`anh${i + 1}.png`);
                    this.runFrame.push(texture);
                }

                for (i = 0; i < 3; i++) {
                    const texture = PIXI.Texture.from(`skill${i + 1}.png`);
                    this.punchFrame.push(texture);
                }

                this.texture = PIXI.Texture.from(`anh2.png`);


                resolve(); // Khi tải tài nguyên hoàn tất, resolve Promise
            }).catch(reject); // Nếu có lỗi xảy ra, reject Promise
        });
    }
}

window.onload = function () {
    Game.init().then(() => {
        const sticky = new Sticky(Game);
        Game.app.stage.addChild(sticky);
    }).catch((error) => {
        console.error("Lỗi trong quá trình tải tài nguyên:", error);
    });
};
