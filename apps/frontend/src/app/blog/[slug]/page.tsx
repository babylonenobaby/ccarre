import { BlogPostPageProps, getPostBySlug } from "../../../lib/posts";

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    return (
        <main className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">
                {post.title}
            </h1>

            <article
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
        </main>
    );
}
