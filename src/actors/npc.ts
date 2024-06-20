import { Actor, Animation, CollisionType, Engine, SpriteSheet, Vector } from "excalibur";
import { Resources } from "../resources";


export class Npc extends Actor {
    constructor(posicao: Vector, nome: string){
        super({
            name: nome,
            pos: posicao,
            width: 32,
            height: 48,
            collisionType: CollisionType.Fixed
        })
    }

    onInitialize(engine: Engine<any>): void {
        const spriteNpcA = SpriteSheet.fromImageSource({
            image: Resources.NpcASpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 8
                }
            }
        })
        const spriteNpcB = SpriteSheet.fromImageSource({
            image: Resources.NpcBSpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 8
                }
            }
        })
        const spriteNpcC = SpriteSheet.fromImageSource({
            image: Resources.NpcCSpriteSheet,
            grid: {
                spriteWidth: 32,
                spriteHeight: 64,
                columns: 56,
                rows: 20
            },
            spacing: {
                originOffset: {
                    y: 8
                }
            }
        })

        let spriteDefinido

        if (this.name == "npc_a") {
            spriteDefinido = spriteNpcA
        } else if (this.name == "npc_b") {
            spriteDefinido = spriteNpcB
        } else if (this.name == "npc_c") {
            spriteDefinido = spriteNpcC
        } else {
            console.log("Nome do NPC não previsto: ", this.name);
        }

        if (spriteDefinido) {
            const downIdle = new Animation({
                frames: [
                    { graphic: spriteDefinido.getSprite(18,1) },
                    { graphic: spriteDefinido.getSprite(19,1) },
                    { graphic: spriteDefinido.getSprite(20,1) },
                    { graphic: spriteDefinido.getSprite(21,1) },
                    { graphic: spriteDefinido.getSprite(22,1) },
                    { graphic: spriteDefinido.getSprite(23,1) }
                ],
                frameDuration: 70
            })
            this.graphics.add(downIdle)
        }
    }
}