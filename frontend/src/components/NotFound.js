import { useNavigate } from "react-router-dom";
import "../css/chart.scss";
export default function NotFound() {
  const navigate = useNavigate();
  const nav = () => {
    navigate("/login");
  };

  return (
    <div class="chart-wrapper">
      <div class="text-center">
        <h1 class="display-1 fw-bold">404</h1>
        <p class="fs-3">
          {" "}
          <span class="text-danger">Oops!</span> Page not found.
        </p>
        <p class="lead">The page you’re looking for doesn’t exist.</p>
        <button type="button" class="btn btn-danger" onClick={nav}>
          Login
        </button>
      </div>
    </div>
  );
}
