import V1 from "./charts/V1";
import V3 from "./charts/V3";
import V4 from "./charts/V4";
import V5 from "./charts/V5";
import V6 from "./charts/V6";
import V7 from "./charts/V7";
import "../css/chart.scss";

export default function N1() {
  return (
    <>
      <div className="center">
        <h2 className="h1">Temperature data and co2 concentrations</h2>
        <div className="mbottom">
          <div className="block">
            <V1 />
          </div>
          <div className="block">
            <V3 />
          </div>
          <div className="block">
            <V4 />
          </div>
          <div className="block">
            <V5 />
          </div>
          <div className="block">
            <V6 />
          </div>
          <div className="block">
            <V7 />
          </div>
        </div>
      </div>
    </>
  );
}
