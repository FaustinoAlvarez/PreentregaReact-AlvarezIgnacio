import React from "react";
import CartWidget from "../Cartwidget/Cartwidget";
import "./navbar.css";


function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand ml-20 px-3" href="#">PushHockey</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active px-3" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link px-3" href="#">Acerca de nosotros</a>
            </li>
            <li class="nav-item">
                <a class="nav-link ml-100" href="#"><CartWidget/> </a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    );
}

export default Navbar;