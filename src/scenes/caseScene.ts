import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    caseMesa?: HTMLElement

    private objetoInteracao: any

    fadeOutElementG(elemento: HTMLElement) {
        let opacidade = parseFloat(elemento.style.opacity)

        setInterval(() => {
            if (opacidade > 0) {
                opacidade = opacidade - 0.01

                elemento.style.opacity = opacidade.toString()
            }
        }, 10)
    }

    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 500
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.F) {
                this.fadeOutElementG(this.caseMesa!)

                this.engine.goToScene("exposicao")
            }
        })
    }
    
    onActivate(context: SceneActivationContext<unknown>): void {
        this.objetoInteracao = context.data
        
        console.log(this.objetoInteracao);

        if (this.objetoInteracao.nomeDoActor == "mesa_stand_a") {
            this.caseMesa = document.createElement("div") as HTMLElement
        
            this.caseMesa.style.opacity = "1"
        
            let containerCase = document.querySelector(".container-game") as HTMLElement
            containerCase.appendChild(this.caseMesa)
        
            this.caseMesa.classList.add("case")
        
            this.caseMesa.innerHTML = `<h2>Case A</h2>
            <p>Case da mesa a<p>`

            let actorNpcA = new Actor({
                pos: vec(this.engine.halfDrawWidth / 2, this.engine.halfDrawHeight)
            })
    
            let imagemNpcA = Resources.NpcA.toSprite()
    
            imagemNpcA.scale = vec(1.7, 1.7)
    
            actorNpcA.graphics.add(imagemNpcA)
    
            this.add(actorNpcA)
        }

        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            this.caseMesa = document.createElement("div") as HTMLElement
        
            this.caseMesa.style.opacity = "1"
        
            let containerCase = document.querySelector(".container-game") as HTMLElement
            containerCase.appendChild(this.caseMesa)
        
            this.caseMesa.classList.add("case")
        
            this.caseMesa.innerHTML = `<h2>Case B</h2>
            <p>Case da mesa b<p>`

            let actorNpcB = new Actor({
                pos: vec(this.engine.halfDrawWidth / 2, this.engine.halfDrawHeight)
            })
    
            let imagemNpcB = Resources.NpcB.toSprite()
    
            imagemNpcB.scale = vec(1.7, 1.7)
    
            actorNpcB.graphics.add(imagemNpcB)
    
            this.add(actorNpcB)
        }
        
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
            this.caseMesa = document.createElement("div") as HTMLElement
        
            this.caseMesa.style.opacity = "1"
        
            let containerCase = document.querySelector(".container-game") as HTMLElement
            containerCase.appendChild(this.caseMesa)
        
            this.caseMesa.classList.add("case")
        
            this.caseMesa.innerHTML = `<h2>Case C</h2>
            <p>Case da mesa c<p>`

            let actorNpcC = new Actor({
                pos: vec(this.engine.halfDrawWidth / 2, this.engine.halfDrawHeight)
            })
    
            let imagemNpcC = Resources.NpcC.toSprite()
    
            imagemNpcC.scale = vec(1.7, 1.7)
    
            actorNpcC.graphics.add(imagemNpcC)
    
            this.add(actorNpcC)
        }
        
        
    }
}