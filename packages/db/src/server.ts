// src/server.ts
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import { createUser, getAllUsers, updateUser, deleteUser } from './user'
import { createPost, getAllPosts, updatePost, deletePost } from './post'

const app = express()
app.use(cors())
app.use(bodyParser.json())

// --- Health check ---
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date() });
});

// --- User Routes ---
app.get('/users', async (req, res) => res.json(await getAllUsers()))
app.post('/users', async (req, res) => res.json(await createUser(req.body)))
app.put('/users/:id', async (req, res) => res.json(await updateUser(+req.params.id, req.body)))
app.delete('/users/:id', async (req, res) => res.json(await deleteUser(+req.params.id)))

// --- Post Routes ---
app.get('/posts', async (req, res) => res.json(await getAllPosts()))
app.post('/posts', async (req, res) => res.json(await createPost(req.body)))
app.put('/posts/:id', async (req, res) => res.json(await updatePost(+req.params.id, req.body)))
app.delete('/posts/:id', async (req, res) => res.json(await deletePost(+req.params.id)))

app.listen(3000, () => console.log('Server started on http://localhost:3000'))
