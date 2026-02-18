import Link from "next/link";
import { Globe, Music, BookOpen, Mic } from "lucide-react";

const categories = [
    {
        title: "Web",
        description: "Sites vitrines, applications web et expériences digitales.",
        href: "/realisations/web",
        icon: Globe,
    },
    {
        title: "Musique",
        description: "Projets musicaux, compositions et productions sonores.",
        href: "/realisations/musique",
        icon: Music,
    },
    {
        title: "Littérature",
        description: "Textes, essais et projets éditoriaux.",
        href: "/realisations/litterature",
        icon: BookOpen,
    },
    {
        title: "Podcast",
        description: "Émissions audio, formats narratifs et interviews.",
        href: "/realisations/podcast",
        icon: Mic,
    },
];

export default function RealisationsPage() {
    return (
        <section className="fade-up">
            <div className="mb-16">
                <h1 className="mb-4">Réalisations</h1>
                <p className="text-muted max-w-2xl">
                    Une sélection de projets créatifs organisés par domaine.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {categories.map((category) => {
                    const Icon = category.icon;

                    return (
                        <Link
                            key={category.title}
                            href={category.href}
                            className="card group block"
                        >
                            <div className="flex flex-col gap-6">

                                {/* Ligne icône + titre */}
                                <div className="flex items-center gap-4">

                                    <Icon
                                        size={24}
                                        strokeWidth={1.5}
                                        className="transition-transform group-hover:-translate-y-1"
                                        style={{ color: "var(--accent)" }}
                                    />

                                    <h2 className="text-2xl transition-transform group-hover:translate-x-1">
                                        {category.title}
                                    </h2>

                                </div>

                                <p className="text-muted">
                                    {category.description}
                                </p>

                                <span
                                    className="text-sm font-medium"
                                    style={{ color: "var(--accent)" }}
                                >
                                    Explorer →
                                </span>

                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}
