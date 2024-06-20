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
            this.elementotexto!.innerHTML = `<h2>XYZ Tech - Transformação Digital e Capacitação na Tecnologia</h2>
            <p>A empresa enfrentava dificuldades na adoção de novas tecnologias pelos funcionários, resultando em baixa eficiência e resistência às mudanças.</p>
            <p>A XYZ Tech Solutions implementou uma plataforma de treinamento gamificada, onde os funcionários ganhavam pontos e badges ao completar módulos de treinamento sobre novas tecnologias. Eles podiam ver seu progresso em um leaderboard, incentivando uma competição saudável.</p>            
            `

            this.actorNpc?.graphics.add(this.listaImagens![0])

            this.actorNpc!.graphics.current!.scale = vec(2.3, 2.3)
        }

        if (this.objetoInteracao.nomeDoActor == "mesa_stand_b") {
            this.elementotexto!.innerHTML = `<h2>ABC Finance - Incentivo à Cultura de Inovação</h2>
            <p>A empresa queria incentivar os funcionários a proporem ideias inovadoras para melhorar processos e produtos, mas havia pouca participação.
            <p>ABC Finance criou um programa chamado "InovaABC" onde os funcionários podiam submeter ideias e ganhar pontos. As ideias eram votadas pelos colegas e avaliadas por um comitê. Os funcionários com as melhores ideias ganhavam prêmios e reconhecimento trimestral.
            `

            this.actorNpc?.graphics.add(this.listaImagens![1])

            this.actorNpc!.graphics.current!.scale = vec(2.3, 2.3)
        }
        
        if (this.objetoInteracao.nomeDoActor == "mesa_stand_c") {
            this.elementotexto!.innerHTML = `<h2>FastMart - Melhoria na Experiência do Cliente</h2>
            <p>A empresa de varejo enfrentava problemas com o atendimento ao cliente, resultando em baixa satisfação e retenção de clientes.
            <p>FastMart lançou uma aplicação interna onde os atendentes ganhavam pontos ao fornecer um excelente atendimento ao cliente, baseado em avaliações dos próprios clientes e supervisores. Os melhores atendentes eram destacados no mural da empresa e recebiam recompensas.
            `

            this.actorNpc?.graphics.add(this.listaImagens![2])

            this.actorNpc!.graphics.current!.scale = vec(2.3, 2.3)
        }

        this.add(this.actorNpc!)
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.elementotexto!.style.opacity = "0"
    }
}