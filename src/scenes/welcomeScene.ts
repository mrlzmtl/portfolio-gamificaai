import { Actor, Color, Engine, FadeInOut, Font, Keys, Label, Scene, TextAlign, Transition, vec } from "excalibur";
import { Resources } from "../resources";


export class welcomeScene extends Scene {
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Black

        let fraseBemVindo = new Label({
            text: "Bem vindo ao portfólio",
            width: 400,
            height: 50,
            pos: vec(engine.halfDrawWidth, 300),
            font: new Font({
                color: Color.White,
                size: 40,
                textAlign: TextAlign.Center,
                family: "Anta"
            })
        })

        this.add(fraseBemVindo)

        let actorLogo = new Actor({
            pos: vec(engine.halfDrawWidth, 430)
        })

        let imagemLogo = Resources.Logo.toSprite()

        imagemLogo.scale = vec(0.4, 0.4)

        actorLogo.graphics.add(imagemLogo)

        this.add(actorLogo)

        let textoIniciar = new Label({
            text: 'Pressione "Enter" para iniciar...',
            width: 200,
            height: 50,
            pos: vec(engine.halfDrawWidth, 630),
            font: new Font({
                color: Color.White,
                size: 20,
                textAlign: TextAlign.Center,
                family: "Anta"
            })
        })

        textoIniciar.actions.repeatForever(context => {
            context.fade(0, 1000)
            context.fade(1, 1000)
        })

        this.add(textoIniciar)

        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter) {
                engine.goToScene("historia")
            }
        })
    }
}