import AppRouter from './routes/index.js';
import express from 'express';
import { API_PORT, VERSION } from './config/index.js';

export class App {
  constructor() {
    this.app = express()

    this.port = API_PORT;

    this.#initializeMiddlewares();
    this.#initializeRoutes()
  }

  #initializeMiddlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: true}))
  }
  #initializeRoutes() {
    this.app.get("/", (req, res) => {
      res.send("Welcome to the API!");
    });
    
    const appRouter = new AppRouter()
    this.app.use(`/api/${VERSION}`, appRouter.getRouter())
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`)
    })
  }
}