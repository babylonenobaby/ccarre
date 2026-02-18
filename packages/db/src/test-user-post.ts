// src/test-user-post.ts
import { createUser, getAllUsers, updateUser, deleteUser } from './user'
import { createPost, getAllPosts, updatePost, deletePost } from './post'

async function main() {
    // --- User ---
    const user = await createUser({
        email: 'alice@user.com',
        password: 'Alice123!',
        name: 'Alice',
    })
    console.log('User créé:', user)

    await updateUser(user.id, { name: 'Alice Wonderland' })
    console.log('Tous les Users:', await getAllUsers())

    // --- Post ---
    const post = await createPost({
        title: 'Hello Prisma',
        slug: 'hello-prisma',
        content: 'Contenu du post...',
        authorId: user.id,
    })
    console.log('Post créé:', post)

    await updatePost(post.id, { published: true })
    console.log('Tous les Posts:', await getAllPosts())

    // Cleanup
    await deletePost(post.id)
    await deleteUser(user.id)
    console.log('Nettoyage terminé')
}

main()
