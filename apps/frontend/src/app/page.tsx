import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-24">
        <Features />
      </section>

      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Mes réalisations</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Découvrez quelques projets concrets sur lesquels j’ai travaillé.
          </p>
        </div>
      </section>
    </>
  );
}
