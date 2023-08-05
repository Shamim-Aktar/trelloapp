import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import mongoose from 'mongoose'
import * as usersController from "./controllers/users";
import bodyParser from 'body-parser';
import authMiddleware from './middlewares/auth';
import cors from 'cors'

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const httpServer = createServer(app);
const io = new Server(httpServer)

app.get('/', (req, res) => {
    res.send("Api is up")

})
app.post("/api/users", usersController.register);
app.post("/api/users/login", usersController.login);
app.get('/api/user', authMiddleware, usersController.currentUser)
io.on('connection', () => {
    console.log('connectt')
})
mongoose.connect('mongodb://localhost:27017/eltrello').then(() => {
    console.log('connection to db')
    httpServer.listen(4001, () => {
        console.log('Api is listening on port 4001')
    })
})

