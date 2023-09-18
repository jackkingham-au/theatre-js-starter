import { TorusKnot } from "@react-three/drei";
import { editable, useCurrentSheet } from "@theatre/r3f";

const ThreeMain = () => {
  const sheet = useCurrentSheet();
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} />

      <editable.group uniqueName="poto">
        <TorusKnot scale={[1, 1, 1]} args={[1, 0.3, 128, 64]}>
          <meshNormalMaterial />
        </TorusKnot>
      </editable.group>
    </>
  );
};

export default ThreeMain;
