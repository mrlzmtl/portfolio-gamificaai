import { Actor, CollisionType, Color, Vector } from "excalibur";

export class Npc extends Actor {
    constructor(posicao: Vector, cor: Color, nome: string){
        super({
            name: nome,
            pos: posicao,
            width: 32,
            height: 32,
            color: cor,
            collisionType: CollisionType.Fixed,
            z: 5
        })
    }
}