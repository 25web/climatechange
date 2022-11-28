import React from "react";
import { Link } from 'react-router-dom';

export default function Navbar() {
        return (
          <nav class="navbar navbar-expand  " aria-label="Second navbar example">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">Home</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
      
            <div class="collapse navbar-collapse" id="navbarsExample02">
              <ul class="navbar-nav me-auto">
                <li class="nav-item">
                  <Link class="nav-link" to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        );
      }