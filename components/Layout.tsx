import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    {/* <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
        <Link href="/users">Users List</Link> |{" "}
        <a href="/api/users">Users API</a>
      </nav>
    </header> */}
    {children}
    <footer className="bg-slate-100 !mx-3 sm:!mx-24 pt-12 pb-6">
      <h3 className="font-['Alata'] text-black text-right border-b-2 pb-2 border-black pr-6 font-black mx-3">
        <span className="text-lg font-light">Contato & Renovação:</span>
        <br />
        Rosa Maria (32) 99920-3720
      </h3>
      <h6 className="right-5 font-['Alata'] text-black text-right pl-3 pr-3 md:pr-12">
        Edição I - 05.24 - Uso por tempo limitado
      </h6>
    </footer>
  </div>
);

export default Layout;
