// src/admin.ts
import { prisma } from './index'

export type AdminCreateInput = {
    email: string
    password: string
    role?: 'SUPER_ADMIN' | 'EDITOR'
    isActive?: boolean
}

export type AdminUpdateInput = Partial<{
    email: string
    password: string
    role: 'SUPER_ADMIN' | 'EDITOR'
    isActive: boolean
    lastLogin: Date
}>

export async function createAdmin(data: AdminCreateInput) {
    return prisma.admin.create({ data })
}

export async function getAllAdmins() {
    return prisma.admin.findMany()
}

export async function getAdminById(id: string) {
    return prisma.admin.findUnique({ where: { id } })
}

export async function updateAdmin(id: string, data: AdminUpdateInput) {
    return prisma.admin.update({ where: { id }, data })
}

export async function deleteAdmin(id: string) {
    return prisma.admin.delete({ where: { id } })
}
