import React from "react";
import style from "./Sobre.module.css"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
// import Layout from "../../components/Layout";
import { imgHome, imgHome2, imgHome3 } from "../../assets/image/image.js";

/* CONTINUAR O SOBRE */
function Sobre() {
    return (
        <div>
        {/*  <Layout>  DANDO ERRO NO CONTEUDO */} 
        <Header/>
                <div className={style.grid_fotos}>
                    <img className={style.img_h} src={imgHome} alt="" width={100} />
                    <img className={style.img_h} src={imgHome2} alt="" width={100} />
                    <img className={style.img_h} src={imgHome3} alt="" width={100} />
                </div>
                <div className={style.quemSomos}>
                    <h3>QUEM SOMOS</h3>
                    <p className={style.p_Sobre}>
                    No Coworking Reservation, oferecemos salas privativas e compartilhadas, projetadas para proporcionar um ambiente profissional, confortável e inspirador, seja para trabalhar individualmente, realizar reuniões ou colaborar com sua equipe.
                    </p>
                    <p>
                    Nosso sistema de reservas online foi desenvolvido para tornar sua experiência ainda mais prática e eficiente, permitindo que você agende seu espaço com facilidade e rapidez. 
                    Dessa forma, garantimos a organização do ambiente, evitando conflitos de horários e assegurando que cada profissional tenha acesso ao espaço ideal para suas necessidades.
                    </p>
                </div>
            < Footer/>
             {/* </Layout> */}
        </div>
    )
}

export default Sobre;