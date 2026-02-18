export default function Features() {
  const features = [
    { title: "Moderne", desc: "Technologies récentes et performantes" },
    { title: "Animé", desc: "Animations premium pour un rendu vivant" },
    { title: "SEO Friendly", desc: "Optimisé pour le référencement" },
    { title: "Scalable", desc: "Prêt pour CMS headless et évolutions futures" },
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {features.map((f) => (
          <div key={f.title} className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
