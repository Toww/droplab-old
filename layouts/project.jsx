import Link from 'next/link';
import MainLayout from "../components/MainLayout";

export default function Layout(frontMatter) {
  return ({ children: content }) => {
    // React hooks, for example `useState` or `useEffect`, go here.
    console.log(content)
    return (
      <MainLayout title={frontMatter.title}>
        <div className="project">
          <header>
            <h2 className="font-custom text-center text-6xl text-orange-300 leading-tight">
              {frontMatter.title}
            </h2>
            <p className="text-center">{frontMatter.type}</p>
          </header>
          <main>
            <article className="text-lg text-center">{content}</article>
            <div className="h-px bg-orange-300 w-full"></div>

            <Link href="/">
              <h3 className="font-custom text-center text-xl underline text-orange-300 mt-3">
                <a href="/">Back to homepage</a>
              </h3>
            </Link>
          </main>
        </div>
      </MainLayout>
    );
  };
}
