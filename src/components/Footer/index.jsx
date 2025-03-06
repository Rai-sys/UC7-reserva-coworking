import React from "react";
import style from "./Footer.module.css";
import { logo, logoFacebook, logoInstagram, logoTwitter } from "../../assets/icon/icon.js";

function Footer() {
    return (
        <footer className={style.footer}>
            <img className={style.logo_footer} src={logo} alt="" />
            <div className={style.logo_apps} >
                <img className={style.logo_fb} src={logoFacebook} alt="" width={42} />
                <img className={style.logo_tt} src={logoTwitter} alt="" width={42} />
                <img className={style.logo_ig} src={logoInstagram} alt="" width={42} />
            </div>



            <div >
                <nav className={style.texto_container}>
                    <ul>
                        <li> Início </li>
                        <li> Sobre </li>
                        <li> Reserva </li>
                        <li> Contato </li>
                    </ul>
                </nav>
            </div>
            
            <p> Todos os direitos reservados a COWORKING SPACE © 2025 </p>
        </footer>
    )
}

export default Footer;