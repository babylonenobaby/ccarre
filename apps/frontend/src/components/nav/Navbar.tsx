import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";


export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-900">
          Ccarre
        </Link>
        <div className="space-x-6">
          <Link href="blog" className="text-gray-700 hover:text-gray-900">
            Blog
          </Link>
          <Link href="realisations" className="text-gray-700 hover:text-gray-900">
            Mes réalisations
          </Link>
          <Link href="contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
