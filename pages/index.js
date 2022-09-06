import * as React from "react";
import Head from "next/head";
import style from "../styles/Home.module.css"


export default function Home() {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <h1 className={style.H1}> Dashboard</h1>

        </>

    )
}
