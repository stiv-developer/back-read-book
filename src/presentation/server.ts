import express, { Router } from 'express';
import compression from 'compression';
import cors from 'cors';

interface Options {
    port: number;
    routes: Router;
}

export class Server {
    private app = express();
    private readonly port: number;
    private readonly routes: Router;

    constructor(options: Options) {
        const { port, routes } = options

        this.port = port;
        this.routes = routes;
    }

    async start() {

        //* Routes
        this.app.use(cors({
            origin: 'http://localhost:4200',
        }))

        this.app.use('/uploads', express.static('D:/uploads', {
            fallthrough: false
        }));
        

        this.app.use(compression());
        this.app.use(express.json()); // Middleware para parsear JSON
        this.app.use(this.routes);

        this.app.get('*', (req, res) => {
            res.send('Hello World');
        });

        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });

    }
}