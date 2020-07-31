import MainLayout from "../components/MainLayout";

export default function Layout(frontMatter) {
  return ({ children: content }) => {
    // React hooks, for example `useState` or `useEffect`, go here.
    return (
      <MainLayout title={frontMatter.title}>
        <div className="project">
          <header>
            <h3 className="font-custom text-center text-6xl text-orange-300 leading-tight">
              {frontMatter.title}
            </h3>
            <p className="text-center">{frontMatter.type}</p>
          </header>
          <main>
            <article className="text-lg text-center">{content}</article>
          </main>
        </div>
      </MainLayout>
    );
  };
}