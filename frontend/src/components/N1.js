import V1 from "./charts/V1";
import V3 from "./charts/V3";
import V4 from "./charts/V4";
import V5 from "./charts/V5";
import V6 from "./charts/V6";
import V7 from "./charts/V7";

export default function CustomView() {
  return (
    <>
      <div>
        <V1 />
        <V3 />
        <V4 />
        <V5 />
        <V6 />
        <V7 />
      </div>
    </>
  );
}
