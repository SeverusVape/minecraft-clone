import { useEffect, useState, useCallback } from "react";

function actionByKey(key) {
    const keyActionMap = {
        KeyW: "moveForward",
        KeyS: "moveBackward",
        KeyA: "moveLeft",
        KeyD: "moveRight",
        Space: "jump",
        Digit1: "dirt",
        Digit2: "sand",
        Digit3: "glass",
        Digit4: "wood",
        Digit5: "log",
        Digit6: "lava",
        Digit7: "stone",
    };
    return keyActionMap[key];
}

export const UseKeyBoard = () => {
    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        dirt: false,
        sand: false,
        glass: false,
        wood: false,
        log: false,
        lava: false,
        stone: false,
    });

    const handleKeyDown = useCallback((e) => {
        const action = actionByKey(e.code);
        if (action) {
            setActions((prev) => {
                return {
                    ...prev,
                    [action]: true,
                };
            });
        }
    }, []);

    const handleKeyUp = useCallback((e) => {
        const action = actionByKey(e.code);
        if (action) {
            setActions((prev) => {
                return {
                    ...prev,
                    [action]: false,
                };
            });
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.addEventListener("keydown", handleKeyDown);
            document.addEventListener("keyup", handleKeyUp);
        };
    }, [handleKeyDown, handleKeyUp]);

    return actions;
};
