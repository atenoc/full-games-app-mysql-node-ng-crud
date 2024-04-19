console.log('WORDS2');

import express, {Application} from 'express'; //Modulo Express
import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';
import morgan from 'morgan';
import cors from 'cors';

class Server{

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void{
        this.app.set('port', process.env.PORT || 3000)  // Asigna el puerto definido, o si no, le asiga el 3000
        this.app.use(morgan('dev')) // Ver en consola las peticiones HTTP del usuario
        this.app.use(cors());   // Poder pedir los datos desde Angular al Servidor
        this.app.use(express.json()); // Acepta datos en formato json del cliente
        this.app.use(express.urlencoded({ extended:false })); // En caso de querer enviar datos del servidor en un html
    }

    routes(): void{
        // this.app.use(indexRoutes);
        this.app.use('/', indexRoutes);
        this.app.use('/api/games', gamesRoutes)
    }

    start(): void{
        this.app.listen(this.app.get('port'))
        console.log("Servidor con puerto: ", this.app.get('port'));
    }
}


const server = new Server();
server.start();