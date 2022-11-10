import "../css/LR.scss";

export default function Login() {
  return (
    <div className="login-App">
      <div className="divp">
        <h2 class="active"> Login </h2>
        <h2 class="inactive underlineHover">
          <a href="/register">Register</a>
        </h2>
      </div>
      <div className="input-container">
        <input type="text" placeholder="Username" />
        <i class="zmdi zmdi-account zmdi-hc-lg"></i>
      </div>

      <div className="input-container">
        <input type="password" placeholder="Password" />
        <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
      </div>
      <div class="container">
        <button class="btn" data="Login"></button>
      </div>
    </div>
  );
}
