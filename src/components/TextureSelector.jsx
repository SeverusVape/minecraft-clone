import { useState, useEffect } from "react";
import { useStore } from "../hooks/useStore";
import { UseKeyBoard } from "../hooks/UseKeyBoard";
import {
    dirtImg,
    grassImg,
    glassImg,
    woodImg,
    logImg,
    stoneImg,
    lavaImg,
} from "../images/images";

const images = {
    dirt: dirtImg,
    grass: grassImg,
    glass: glassImg,
    wood: woodImg,
    log: logImg,
    lava: lavaImg,
    stone: stoneImg,
};

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false);
    const [activeTexture, setTexture] = useStore((state) => [
        state.texture,
        state.setTexture,
    ]);
    const { dirt, grass, glass, wood, log, lava, stone } = UseKeyBoard();

    useEffect(() => {
        const textures = {
            dirt,
            grass,
            glass,
            wood,
            log,
            lava,
            stone,
        };

        const pressedTexture = Object.entries(textures).find(([k, v]) => v);
        if (pressedTexture) {
            setTexture(pressedTexture[0]);
        }
    }, [setTexture, dirt, grass, glass, wood, log, lava, stone]);

    useEffect(() => {
        const visibilityTimeout = setTimeout(() => {
            setVisible(false);
        }, 2000);
        setVisible(true);

        return () => {
            clearTimeout(visibilityTimeout);
        };
    }, [activeTexture]);

    return (
        visible && (
            <div className="absolute centered texture-selector">
                {Object.entries(images).map(([k, src]) => {
                    return (
                        <img
                            src={src}
                            key={k}
                            alt={k}
                            className={`image ${
                                k === activeTexture ? "active" : ""
                            }`}
                        />
                    );
                })}
            </div>
        )
    );
};
