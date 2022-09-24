import { Canvas } from "@react-three/fiber";
import { Sky } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/Player";
import { FPV } from "./components/FPV";
import { cursor } from "./images/images";

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
                    <Ground />
                </Physics>
            </Canvas>
            <div className="absolute centered">
                <img src={cursor} alt="cursor" />
            </div>
        </>
    );
}

export default App;
