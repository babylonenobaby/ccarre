// src/lib/posts.ts
import fs from "fs";
import path from "path";
import { remark } from "remark";
import html from "remark-html";
import matter from "gray-matter";

export type BlogPostPageProps = {
    params: {
        slug: string;
    };
};

export type PostMeta = {
    title: string;
    date: string;
    excerpt: string;
    slug: string;
    contentHtml: string;
    coverImage: string;
    author: string;
    tags: string[];
    readingTime: string;
};

const postsDirectory = path.join(process.cwd(), "src/content/posts");

export function getAllPosts(): PostMeta[] {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const { data } = matter(fileContents);

        return {
            slug,
            title: data.title as string,
            date: data.date as string,
            excerpt: data.excerpt as string,
            contentHtml: "",
            coverImage: "",
            author: data.author as string,
            tags: data.tags as string[],
            readingTime: data.readingTime as string
        };
    });
}


export async function getPostBySlug(slug: string) {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(content);

    const contentHtml = processedContent.toString();

    return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        contentHtml,
    };
}
