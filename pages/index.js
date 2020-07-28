import Head from "next/head";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Drop - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>This is the homepage, yay! </h1>
        <p className="text-orange-500">Orange <span>blue</span></p>
        <Link href="/about">
          <a>About page</a>
        </Link>
      </main>
    </div>
  );
}
