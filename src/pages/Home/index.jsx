import React from "react";
import Header from "../../components/Header"
// import Footer from "../../components/Footer"
import style from "./Home.module.css"
import image from "../../assets/image/home.svg"

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
                        width="700" />
                </main>
            {/* <Footer /> */}
        </body>
        </>
    )
}

export default Home;