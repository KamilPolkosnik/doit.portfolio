import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load">
        <p className="text-[14px] text=[#f1f1f1] font-bold mt-10">
          {progress.toFixed(2)}%
        </p>
      </span>
    </Html>
  );
};

export default Loader;
