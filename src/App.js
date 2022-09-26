import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { FPV } from "./components/FPV";
import { Cubes } from "./components/Cubes";
import { TextureSelector } from "./components/TextureSelector";

function App() {
    return (
        <>
            <Canvas>
                <Sky sunPosition={[100, 100, 20]} />
                <ambientLight intensity={0.5} />
                {/* CAMERA */}
                <FPV />
                {/* GROUND */}
                <Physics>
                    <Player />
                    <Cubes />
                    <Ground />
                </Physics>
            </Canvas>
            <div className="absolute centered">+</div>
            <TextureSelector />
        </>
    );
}

export default App;
