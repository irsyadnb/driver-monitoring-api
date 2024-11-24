import AppRouter from './routes/index.js';
import SocketHandler from './sockets/socket.js';
import http from 'http'
import { Server } from 'socket.io';
import express from 'express';
import { API_PORT, SOCKET_PORT, VERSION } from './config/index.js';

export class App {
  constructor() {
    this.app = express()

    this.httpServer = http.createServer(this.app).listen(SOCKET_PORT, () => {
      console.log(`[Http] Server started on ${SOCKET_PORT}`)
    })
    this.io = new Server(this.httpServer, {
      cors: {
        origin: "*",
      }
    })

    this.port = API_PORT;

    this.#initializeMiddlewares();
    this.#initializeRoutes()
  }

  #initializeMiddlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: true}))
  }
  #initializeRoutes() {
    // Initialize REST routes
    const appRouter = new AppRouter()
    this.app.use(`/api/${VERSION}`, appRouter.getRouter())

    // Initialize Socket.IO
    SocketHandler(this.io)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`)
    })
  }
}