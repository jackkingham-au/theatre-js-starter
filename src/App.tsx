import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Stats } from "@react-three/drei";

import { editable as e, SheetProvider, extension } from "@theatre/r3f";
import { getProject } from "@theatre/core";
import studio from "@theatre/studio";

import ThreeMain from "./components/ThreeMain";
import { PerspectiveCamera } from "./components/PerspectiveCamera";
import state from "./state.json";

studio.extend(extension);
studio.initialize();

export default function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>
        <Canvas>
          <SheetProvider
            getSheet={() => getProject("Playground - R3F").sheet("R3F-Canvas")}
          >
            <ThreeMain />
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          </SheetProvider>
          {/* <OrbitControls makeDefault /> */}
          {/* <Stats /> */}
        </Canvas>
      </Suspense>
    </div>
  );
}
