import { Server } from './presentation/server';
import { MongoDatabase } from './data/mongo';
import { AppRoutes } from './presentation/routes';
import { envs } from './config/envs';
import 'dotenv/config';


(async () => {
    await MongoDatabase.connect({
        mongoUrl: envs.MONGO_URL,
        dbName: envs.MONGO_DB_NAME
    });

    const server = new Server({
        port: envs.PORT,
        routes: AppRoutes.routes
    });

    server.start();
})();