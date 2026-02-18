// src/user.ts
import { prisma } from './index'

export type UserCreateInput = {
    email: string
    password: string
    name?: string
    role?: string
}

export type UserUpdateInput = Partial<{
    email: string
    password: string
    name: string
    role: string
}>

export async function createUser(data: UserCreateInput) {
    return prisma.user.create({ data })
}

export async function getAllUsers() {
    return prisma.user.findMany({ include: { posts: true } })
}

export async function getUserById(id: number) {
    return prisma.user.findUnique({ where: { id }, include: { posts: true } })
}

export async function updateUser(id: number, data: UserUpdateInput) {
    return prisma.user.update({ where: { id }, data })
}

export async function deleteUser(id: number) {
    return prisma.user.delete({ where: { id } })
}
