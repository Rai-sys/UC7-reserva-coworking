import React from "react";
import Header from "../../components/Header"
import style from "./Home.module.css"
import image from "../../assets/image/coworking-home.avif"

function Home() {
    return (
        <>
        <body>
        <Header />
            <main>
                <div>
                <h1>
                    Bem-vindo ao <span className={style.empresaNome}>Coworking Reservation!</span>
                </h1>
                <p>  O espaço ideal para empresas, freelances e autônomos trabalharem com conforto, produtividade e flexibilidade.</p>
                </div>
                <img src={image} alt="grupo de pessoas em coworking"
                width="800"/>
            </main>
            </body>
        </>
    )
}

export default Home;