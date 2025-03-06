import React from "react";
import style from "./Home.module.css"
// import Layout from "../../components/Layout";
import Header from "../../components/Header";
import image from "../../assets/image/home.svg"

function Home() {
  return (
    <div>
      <Header />
        <main>
          <div className={style.texto}>
            <h1>
              Bem-vindo ao <span className={style.empresaNome}>Coworking Reservation!</span>
            </h1>
            <p>  O espaço ideal para empresas, freelances e autônomos trabalharem com conforto, produtividade e flexibilidade.</p>
          </div>
          <img src={image} alt="grupo de pessoas em coworking"
            width="700" />
        </main>
      

    </div>
  )
}

// function Home() {
//     return (
//       <div>
//         <header>
//           <h1>
//             Bem-vindo ao <span className={style.empresaNome}>Coworking Reservation!</span>
//           </h1>
//         </header>
//         <main>
//           <p>O espaço ideal para empresas, freelances e autônomos trabalharem com conforto, produtividade e flexibilidade.</p>
//           <img src={image} alt="grupo de pessoas em coworking" width="700" />
//         </main>
//         <footer>
//           <p>© 2025 Coworking Reservation</p>
//         </footer>
//       </div>
//     );
//   }

// function Home() {
//     return (
//       <Layout>
//         <main>
//           <div>
//             <h1>
//               Bem-vindo ao <span className={style.empresaNome}>Coworking Reservation!</span>
//             </h1>
//             <p>O espaço ideal para empresas, freelances e autônomos trabalharem com conforto, produtividade e flexibilidade.</p>
//           </div>
//           <img src={image} alt="grupo de pessoas em coworking" width="700" />
//         </main>
//       </Layout>
//     );
//   }
export default Home;