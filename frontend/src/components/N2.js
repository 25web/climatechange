import V8 from "./charts/V8";
import V9 from "./charts/V9";
import "../css/chart.scss";

//shows charts V8 and V9
export default function N1() {
  return (
    <>
      <div className="center">
        <h2 className="h1">Emission sources</h2>
        <div className="mbottom">
          <div className="block">
            <V8 />
          </div>
          <div className="block">
            <V9 />
          </div>
        </div>
      </div>
    </>
  );
}
