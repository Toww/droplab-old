import MainLayout from "components/MainLayout";
import Link from "next/link";

export default function Lost({ allProjectsData }) {
  return (
    <MainLayout title="Searching for something ?">
      <main>
        <img
          className="mx-auto"
          src="https://media.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif"
          alt="Lost gif"
        />
        <h3 className="text-center font-custom text-5xl text-orange-300 mt-4">
          Searching for something?
        </h3>
        <p className="text-center">
          <Link href="/">
            <a className="underline">Go back to homepage</a>
          </Link>
        </p>
      </main>
    </MainLayout>
  );
}
