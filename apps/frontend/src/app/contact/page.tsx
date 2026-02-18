export default function ContactPage() {
    return (
        <main className="max-w-3xl mx-auto px-6 py-24">
            <h1 className="text-4xl font-bold mb-8">Contact</h1>

            <form className="space-y-6">
                <div>
                    <label className="block font-medium mb-1">Nom</label>
                    <input
                        type="text"
                        className="w-full rounded-lg border px-4 py-2"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full rounded-lg border px-4 py-2"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Message</label>
                    <textarea
                        rows={5}
                        className="w-full rounded-lg border px-4 py-2"
                    />
                </div>

                <button
                    type="submit"
                    className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                >
                    Envoyer
                </button>
            </form>
        </main>
    );
}
