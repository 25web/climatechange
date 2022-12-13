import React from "react";
import "../css/FNH.scss";

export default function Footer() {
  return (
    <footer>
      <div className="container clearfix">
        <div className="col" id="col-2">
          <ul>
            <li>ABOUT</li>
            <li>
              <p>Oamk website project</p>
            </li>
          </ul>
        </div>
        <div className="col" id="col-3">
          <ul>
            <li>ASDASD</li>
            <li>
              <a href="https://github.com/JoniPahikainen">Joni Pahikainen</a>
            </li>
            <li>
              <a href="https://github.com/Kesonjus">Juha-Pekka Kesonen</a>
            </li>
            <li>
              <a href="https://github.com/tomlnd">Tomi Laine</a>
            </li>
            <li>
              <a href="https://github.com/Hilppah">Hilppa Huhtanen</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
