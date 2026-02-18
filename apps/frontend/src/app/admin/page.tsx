// src/app/admin/page.tsx
import Link from "next/link";

export default function AdminPage() {
    return (
        <main className="max-w-xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Admin Blog</h1>

            <Link href="/admin/new" className="text-indigo-600">
                ➕ Nouvel article
            </Link>
        </main>
    );
}
