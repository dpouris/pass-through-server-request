import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Server Api Request</title>
        <meta name="description" content="Test call" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 align="center">PTSV2 Toilet Server Pass-through Test 😎</h1>

      <main>{children}</main>

      <footer></footer>
    </div>
  );
};

export default Layout;
