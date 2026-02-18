import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="mt-32 border-t"
            style={{
                background: "var(--background)",
                borderColor: "var(--border)",
            }}
        >
            <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

                {/* Logo */}
                <div>
                    <div className="text-2xl font-semibold tracking-tight">
                        CCARRE
                    </div>

                    <p className="mt-4 text-sm text-muted">
                        Design & Développement web moderne.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                        Navigation
                    </h3>

                    <ul className="mt-4 space-y-3 text-sm">
                        <li>
                            <Link href="/architecture" className="link-animated">
                                Architecture du site
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="link-animated">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link href="/realisations" className="link-animated">
                                Réalisations
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Informations légales */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                        Informations légales
                    </h3>

                    <ul className="mt-4 space-y-3 text-sm">
                        <li>
                            <Link href="/mentions-legales" className="link-animated">
                                Mentions légales
                            </Link>
                        </li>
                        <li>
                            <Link href="/confidentialite" className="link-animated">
                                Politique de confidentialité (RGPD)
                            </Link>
                        </li>
                        <li>
                            <Link href="/accessibilite" className="link-animated">
                                Accessibilité (RGAA)
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
                        Contact
                    </h3>

                    <p className="mt-4 text-sm text-muted">
                        contact@ccarre.fr
                    </p>
                </div>

            </div>

            <div
                className="border-t py-6 text-center text-xs text-muted"
                style={{ borderColor: "var(--border)" }}
            >
                © {new Date().getFullYear()} CCARRE — Tous droits réservés
            </div>
        </footer>
    );
}
