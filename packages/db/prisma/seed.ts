// import { PrismaClient } from "../src/generated/client/client"
import bcrypt from "bcrypt"
import { prisma } from '../src/index'


async function main() {
    const hashedPassword = await bcrypt.hash("password123", 10)

    // 🔹 USER ADMIN
    const adminUser = await prisma.user.upsert({
        where: { email: "admin@ccarre.com" },
        update: {},
        create: {
            email: "admin@ccarre.com",
            name: "Admin",
            password: hashedPassword,
            role: "USER",
        },
    })

    // 🔹 USER CLASSIQUE
    const normalUser = await prisma.user.upsert({
        where: { email: "user@ccarre.com" },
        update: {},
        create: {
            email: "user@ccarre.com",
            name: "User",
            password: hashedPassword,
            role: "USER",
        },
    })

    // 🔹 POST lié à l’admin
    await prisma.post.upsert({
        where: { slug: "welcome-post" },
        update: {},
        create: {
            title: "Welcome to CCarre 🚀",
            slug: "welcome-post",
            content: "Ceci est le premier post généré par le seed.",
            excerpt: "Premier post",
            published: true,
            authorId: adminUser.id,
        },
    })

    console.log("🌱 Seed terminé avec succès")
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
