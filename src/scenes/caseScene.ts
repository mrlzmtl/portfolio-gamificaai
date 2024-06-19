import { Actor, Color, Engine, FadeInOut,  Keys,  Scene, SceneActivationContext, Sprite, Transition, vec } from "excalibur";
import { Resources } from "../resources";


export class caseScene extends Scene {
    private objetoInteracao: any

    private actorNpc?: Actor
    private listaImagens?: Sprite[]

    elementotexto?: HTMLElement

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

        this.elementotexto = document.createElement("div") as HTMLElement
        this.elementotexto.classList.add("texto-case")

        let containerGame = document.querySelector(".container-game")
        containerGame?.appendChild(this.elementotexto)

        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Esc) {
                engine.goToScene("exposicao")
            }
        })

        this.actorNpc = new Actor({
            pos: vec(engine.drawWidth - 300, engine.halfDrawHeight - 50)
        })

        let imagemNpcA = Resources.NpcA.toSprite()
        let imagemNpcB = Resources.NpcB.toSprite()
        let imagemNpcC = Resources.NpcC.toSprite()

        this.listaImagens = [imagemNpcA, imagemNpcB, imagemNpcC]
    }
    
    onActivate(context: SceneActivationContext<unknown>): void {
        this.elementotexto!.style.opacity = "1"

        this.objetoInteracao = context.data
        
        console.log(this.objetoInteracao);

        if (this.objetoInteracao.nomeDoActor == "mesa_stand_a") {
            this.elementotexto!.innerHTML = `<h2>Case a<h2>
            <p>Descrição do case a<p>
            <p>Descrição do case XYZ Tech Solutions<p>`

            this.actorNpc?.graphics.add(this.listaImagens![0])

            this.actorNpc!.graphics.current!.scale = vec(2.3, 2.3)
        }

        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            this.elementotexto!.innerHTML = `<h2>Case b<h2>
            <p>Descrição do case b<p>
            <p>Descrição do case ABC Finance<p>`

            this.actorNpc?.graphics.add(this.listaImagens![1])

            this.actorNpc!.graphics.current!.scale = vec(2.3, 2.3)
        }
        
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
            this.elementotexto!.innerHTML = `<h2>Case c<h2>
            <p>Descrição do case c<p>
            <p>Descrição do case FastMart<p>`

            this.actorNpc?.graphics.add(this.listaImagens![2])

            this.actorNpc!.graphics.current!.scale = vec(2.3, 2.3)
        }

        this.add(this.actorNpc!)
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.elementotexto!.style.opacity = "0"
    }
}