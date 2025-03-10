import React from "react";
import style from "./Header.module.css";
import icon from "../../assets/icon/logo.png";

function Header() {
    return (
        <header className={style.header}>
            <div class="logo">
                <img src={icon} alt="" width={100}/>
            </div>

                <nav>
                    <ul>
                        <li> Início </li>
                        <li> Sobre </li>
                        <li> Reserva </li>
                        <li> Contato </li>
                    </ul>
                </nav>
            <div className={style.button_login}>
                <h3> Login </h3>
            </div>
        </header>
    )
}

export default Header;