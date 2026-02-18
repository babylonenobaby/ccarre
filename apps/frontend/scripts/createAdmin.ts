// scripts/createAdmin.ts
import { prismaCli } from "../prisma/prisma.js"; // ✅ attention au .js
import bcrypt from "bcrypt";

async function main() {
    const hashedPassword = await bcrypt.hash("Mickael.1.", 10);

    const admin = await prismaCli.user.create({
        data: {
            name: "Mickael Callimoutou",
            email: "mickael.callimoutou@live.fr",
            password: hashedPassword,
            role: "ADMIN",
        },
    });

    console.log("Admin créé :", admin);
}

main()
    .catch(console.error)
    .finally(async () => prismaCli.$disconnect());
