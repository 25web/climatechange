import "../css/LR.scss";

export default function Register() {
  return (
    <div className="register-App">
      <div className="divp">
        <h2 class="active"> Register </h2>
        <h2 class="inactive underlineHover">
          <a href="/login">Login</a>
        </h2>
      </div>
      <div className="input-container-two">
        <input className="inputw" type="text" placeholder="First Name" />
        <input className="inputw2" type="text" placeholder="Last Name" />
      </div>
      <div className="input-container">
        <input type="text" placeholder="Email" />
        <i class="zmdi zmdi-email zmdi-hc-lg"></i>
      </div>

      <div className="input-container">
        <input type="password" placeholder="Password" />
        <i class="zmdi zmdi-lock zmdi-hc-lg"></i>
      </div>

      <div class="container">
        <button class="btn" data="Register"></button>
      </div>
    </div>
  );
}
