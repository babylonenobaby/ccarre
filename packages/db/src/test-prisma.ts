import { prisma } from './index.ts';

async function main() {
    const admin = await prisma.admin.create({
        data: {
            email: 'mickael.callimom@gmail.com',
            role: 'SUPER_ADMIN', // selon ton enum Role
            password: 'Mickael.1...',
        },
    });
    console.log('Admin créé:', admin);

    const allAdmins = await prisma.admin.findMany();
    console.log('Tous les admins:', allAdmins);

    // Supprimer le test pour garder la DB propre
    await prisma.admin.delete({ where: { id: admin.id } });
    console.log('Admin supprimé');
}

main().finally(() => prisma.$disconnect());
