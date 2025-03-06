import React from "react";
import style from "./Layout.module.css";
import Header from "../Header";
import Footer from "../Footer";

function Layout({children}) {
    return (
        <div className={style.layout}>
            <Header />
            <main className={style.conteudo}> {children} </main>
            <Footer />
        </div>
    )
}

export default Layout;