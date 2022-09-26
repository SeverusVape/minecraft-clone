import { NearestFilter, TextureLoader, RepeatWrapping } from "three";
import {
    dirtImg,
    grassImg,
    glassImg,
    sandImg,
    woodImg,
    logImg,
    lavaImg,
    stoneImg,
} from "./images";

const dirtTexture = new TextureLoader().load(dirtImg);
const grassTexture = new TextureLoader().load(grassImg);
const sandTexture = new TextureLoader().load(sandImg);
const glassTexture = new TextureLoader().load(glassImg);
const woodTexture = new TextureLoader().load(woodImg);
const logTexture = new TextureLoader().load(logImg);
const groundTexture = new TextureLoader().load(grassImg);
const stoneTexture = new TextureLoader().load(stoneImg);
const lavaTexture = new TextureLoader().load(lavaImg);

dirtTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
stoneTexture.magFilter = NearestFilter;
lavaTexture.magFilter = NearestFilter;
sandTexture.magFilter = NearestFilter;

groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;

export {
    dirtTexture,
    grassTexture,
    glassTexture,
    woodTexture,
    logTexture,
    groundTexture,
    stoneTexture,
    lavaTexture,
    sandTexture,
};
