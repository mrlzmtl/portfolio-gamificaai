import { ImageFiltering, ImageSource, Loader, Sound } from "excalibur";
import { TiledResource } from "@excaliburjs/plugin-tiled";

import sword from "./images/sword.png";
import logo from "./images/logo.png";
import logoVertical from "./images/logo-vertical.png"
import gamificar from './images/gamification.png'

import pngTilesetPath from "./maps/Room_Builder_32x32.png?url"

import tsxParedesPath from "./maps/tileset_paredes.tsx?url"
import tsxGenericPath from "./maps/tileset_generic.tsx?url"
import tsxEstoquePath from "./maps/tileset_estoque.tsx?url"
import tsxBibliotecaPath from "./maps/tileset_biblioteca.tsx?url"

import tmxMapaPath from "./maps/showroom_map.tmx?url"

import playerSpritePath from "./sprites/player.png"

import npcASpriteSheet from "./sprites/npc_a.png"
import npcBSpriteSheet from "./sprites/npc_b.png"
import npcCSpriteSheet from "./sprites/npc_c.png"

import ritmada from "./sounds/ritmada_zelda.mp3"
import classico from "./sounds/zelda.mp3"

import npcA from "./images/npc_a.png"
import npcB from "./images/npc_b.png"
import npcC from "./images/npc_c.png"

export const Resources = {
  Sword: new ImageSource(sword),
  Logo: new ImageSource(logo),
  PlayerSpriteSheet: new ImageSource(playerSpritePath, {filtering: ImageFiltering.Pixel}), 
  LogoVertical: new ImageSource(logoVertical),
  Gamificar: new ImageSource(gamificar),
  RitmadaBGM: new Sound(ritmada),
  ClassicoBGM: new Sound(classico),
  Mapa: new TiledResource(tmxMapaPath, {
    pathMap: [
      {path: "showroom_map.tmx", output: tmxMapaPath},
      {path: "Room_Builder_32x32.png", output: pngTilesetPath},
      {path: "tileset_paredes.tsx", output: tsxParedesPath},
      {path: "tileset_generic.tsx", output: tsxGenericPath},
      {path: "tileset_estoque.tsx", output: tsxEstoquePath},
      {path: "tileset_biblioteca.tsx", output: tsxBibliotecaPath}
    ]
  }),
  NpcA: new ImageSource(npcA),
  NpcB: new ImageSource(npcB),
  NpcC: new ImageSource(npcC),
  NpcASpriteSheet: new ImageSource(npcASpriteSheet),
  NpcBSpriteSheet: new ImageSource(npcBSpriteSheet),
  NpcCSpriteSheet: new ImageSource(npcCSpriteSheet)
} as const;

export const loader = new Loader();
for (const res of Object.values(Resources)) {
  loader.addResource(res);
}
