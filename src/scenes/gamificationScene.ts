import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene {
    elementoGamificacao?: HTMLElement

    fadeOutElementG(elemento: HTMLElement) {
        let opacidade = parseFloat(elemento.style.opacity)

        setInterval(() => {
            if (opacidade > 0) {
                opacidade = opacidade - 0.1

                elemento.style.opacity = opacidade.toString()
            }
        }, 20)
    }

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        this.elementoGamificacao = document.createElement("div") as HTMLElement

        this.elementoGamificacao.style.opacity = "1"

        let containerGame = document.querySelector(".container-game") as HTMLElement
        containerGame.appendChild(this.elementoGamificacao)

        this.elementoGamificacao.classList.add("gamificar")

        this.elementoGamificacao.innerHTML = `<h2>O que é gamificação?</h2>
        <p>Gamificação é a aplicação de elementos típicos de jogos 
        em contextos não lúdicos, com o objetivo de engajar e motivar 
        indivíduos a atingir determinados objetivos. 
        Esta abordagem se utiliza de componentes como pontuação, 
        níveis, recompensas, desafios, e feedback imediato, visando 
        promover comportamentos desejados e aumentar a participação e o 
        comprometimento dos participantes.`

        let actorGamificacao = new Actor({
            pos: vec(engine.halfDrawWidth / 2, engine.halfDrawHeight)
        })

        let imagemGamificacao = Resources.Gamificar.toSprite()

        imagemGamificacao.scale = vec(0.7, 0.7)

        actorGamificacao.graphics.add(imagemGamificacao)

        this.add(actorGamificacao)

        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter) {
                this.fadeOutElementG(this.elementoGamificacao!)

                engine.goToScene("")
            }
        })
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.elementoGamificacao?.remove()
    }
}