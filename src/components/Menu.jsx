import { useStore } from "../hooks/useStore";

export const Menu = () => {
    const [saveWorld, resetWorld] = useStore((state) => [
        state.saveWorld,
        state.resetWorld,
    ]);

    return (
        <div className="menu absolute">
            <button onClick={() => saveWorld()}>SAVE</button>

            <button onClick={() => resetWorld()}>RESET</button>
        </div>
    );
};
