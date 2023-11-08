'use client'

import {NavBar, Home, Footer} from "@/components";
import Head from "next/head";
import {ThemeProvider} from "next-themes";


const Page = () => {
    return (
        <>
            <Head>
                <style>{`
          html {
            scroll-behavior: smooth;
          }
          @media (prefers-reduced-motion: reduce) {
            html {
              scroll-behavior: auto;
            }
          }
        `}</style>
            </Head>
            <ThemeProvider enableSystem={true} attribute="class">
                <NavBar/>
                <Home/>
                <Footer/>
            </ThemeProvider>
        </>

    );
}

export default Page;