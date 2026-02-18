// src/test-admin.ts
import {
    createAdmin,
    getAllAdmins,
    updateAdmin,
    deleteAdmin,
} from './admin'

async function main() {
    console.log('=== Création Admin ===')
    const admin = await createAdmin({
        email: 'test@admin.com',
        password: 'Test123!',
        role: 'EDITOR',
    })
    console.log(admin)

    console.log('=== Tous les Admins ===')
    console.log(await getAllAdmins())

    console.log('=== Update Admin ===')
    const updated = await updateAdmin(admin.id, { isActive: false })
    console.log(updated)

    console.log('=== Récupération par ID ===')
    const single = await getAllAdmins()
    console.log(single)

    console.log('=== Suppression Admin ===')
    await deleteAdmin(admin.id)
    console.log('Admin supprimé !')

    process.exit(0)
}

main()
