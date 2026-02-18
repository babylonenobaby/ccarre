import Link from "next/link";
import { getAllPosts } from "../../lib/posts";

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <section className="fade-up">
            <div className="mb-16">
                <h1 className="mb-4">Blog</h1>
                <p className="text-muted max-w-2xl">
                    Réflexions, développement web et explorations créatives.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group block"
                    >
                        <article className="card overflow-hidden">

                            {/* IMAGE */}
                            <div className="relative aspect-video overflow-hidden rounded-xl">
                                <img
                                    src={post.coverImage}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />

                                {/* Reading time overlay */}
                                <span
                                    className="absolute bottom-3 right-3 text-xs px-2 py-1 rounded-md"
                                    style={{
                                        background: "rgba(0,0,0,0.7)",
                                        color: "white",
                                    }}
                                >
                                    {post.readingTime}
                                </span>
                            </div>

                            {/* CONTENT */}
                            <div className="mt-6 space-y-4">

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {(post.tags ?? []).map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-1 rounded-md border"
                                            style={{
                                                borderColor: "var(--border)",
                                                color: "var(--muted)",
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h2 className="text-xl font-semibold group-hover:translate-x-1 transition-transform">
                                    {post.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="text-muted text-sm">
                                    {post.excerpt}
                                </p>

                                {/* Meta */}
                                <div className="flex justify-between text-xs text-muted pt-2">
                                    <span>{post.author}</span>
                                    <span>
                                        {new Date(post.date).toLocaleDateString("fr-FR", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </span>
                                </div>

                            </div>

                        </article>
                    </Link>
                ))}
            </div>
        </section>
    );
}
