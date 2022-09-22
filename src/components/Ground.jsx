import { usePlane } from "@react-three/cannon";
import { NearestFilter, RepeatWrapping } from "three";
import { groundTexture } from "../images/textures";

export const Ground = () => {
    const [ref] = usePlane(() => ({
        // Coordinates in radiants where 1 radiant === PI (180deg)
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0, 0],
    }));

    // for repeating and filtering the texture
    groundTexture.magFilter = NearestFilter;
    groundTexture.wrapS = RepeatWrapping;
    groundTexture.wrapT = RepeatWrapping;
    groundTexture.repeat.set(100, 100);

    return (
        <mesh ref={ref}>
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" map={groundTexture} />
        </mesh>
    );
};
