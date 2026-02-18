// src/post.ts
import { prisma } from './index'

export type PostCreateInput = {
    title: string
    slug: string
    content: string
    excerpt?: string
    published?: boolean
    authorId: number
}

export type PostUpdateInput = Partial<{
    title: string
    slug: string
    content: string
    excerpt: string
    published: boolean
}>

export async function createPost(data: PostCreateInput) {
    return prisma.post.create({ data })
}

export async function getAllPosts() {
    return prisma.post.findMany({ include: { author: true } })
}

export async function getPostById(id: number) {
    return prisma.post.findUnique({ where: { id }, include: { author: true } })
}

export async function updatePost(id: number, data: PostUpdateInput) {
    return prisma.post.update({ where: { id }, data })
}

export async function deletePost(id: number) {
    return prisma.post.delete({ where: { id } })
}
