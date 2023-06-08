import { AnimatedSprite, Container, Texture, Graphics, Ticker } from "pixi.js";
import { Sound } from "@pixi/sound";
import * as PIXI from 'pixi.js'


export class Sticky extends Container {
    constructor(game) {
        super()
        //cai dat cho runFrame
        this.runFrame = new PIXI.AnimatedSprite(game.runFrame);
        this.runFrame.x = game.app.screen.width / 2
        this.runFrame.y = game.app.screen.height - 200
        this.runFrame.width = 150
        this.runFrame.height = 200
        this.runFrame.animationSpeed = 0.1
        this.runFrame.scale.x = 0.5
        this.runFrame.anchor.set(0.5, 0.5)
        this.speed = 5
        this.addChild(this.runFrame)






        window.addEventListener("keydown", this.handleKeyDown.bind(this));
        window.addEventListener("keyup", this.handleKeyUp.bind(this));

        Ticker.shared.add(this.gameLoop, this)
    }



    handleKeyDown(event) {
        switch (event.keyCode) {
            case 37: // Arrow left
                this.moveLeft = true
                this.runFrame.scale.x = -0.5
                console.log(this.runFrame.width)
                this.runFrame.play()
                break;
            case 38: // Arrow up

                break;
            case 39: // Arrow right
                this.moveRight = true
                this.runFrame.scale.x = 0.5
                this.runFrame.play()
                break;
            case 40: // Arrow down

                break;
            case 32:

                break;
        }
    }

    handleKeyUp(event) {
        switch (event.keyCode) {
            case 37: // Arrow left
                this.moveLeft = false
                this.runFrame.gotoAndStop(1)
                break;
            case 38: // Arrow up
                break;
            case 39: // Arrow right
                this.moveRight = false
                this.runFrame.gotoAndStop(1)
                break;
            case 40: // Arrow down

                break;
        }
    }
    gameLoop() {
        if (this.moveLeft == true) {
            this.runFrame.x -= 5
        }
        if (this.moveRight == true) {
            this.runFrame.x += 5
        }
    }

}