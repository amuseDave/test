import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
export default function Canvas() {
  const keyFrames = useSelector((state) => state.custom.keyFrames);
  const activeKeyFrame = useSelector((state) => state.custom.activeKeyFrame);

  const dispatch = useDispatch();
  const canvasEl = useRef();
  const ctx = useRef();

  const curKF = keyFrames[activeKeyFrame];

  useEffect(() => {
    ctx.current = canvasEl.current.getContext("2d");
  }, []);

  useEffect(() => {
    console.log("working");

    function handleMove() {}

    canvasEl.current.addEventListener("mousemove");
    return () => {
      canvasEl.current.removeEventListener("mousemove");
    };
  }, [curKF]);
  return (
    <div className="flex items-center gap-2">
      <p className="text-white">Translate: </p>
      <canvas
        ref={canvasEl}
        width={160}
        height={160}
        className="bg-slate-950"
      ></canvas>
    </div>
  );
}
