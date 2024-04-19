"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('WORDS2');
const express_1 = __importDefault(require("express")); //Modulo Express
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); // Asigna el puerto definido, o si no, le asiga el 3000
        this.app.use(morgan_1.default('dev')); // Ver en consola las peticiones HTTP del usuario
        this.app.use(cors_1.default()); // Poder pedir los datos desde Angular al Servidor
        this.app.use(express_1.default.json()); // Acepta datos en formato json del cliente
        this.app.use(express_1.default.urlencoded({ extended: false })); // En caso de querer enviar datos del servidor en un html
    }
    routes() {
        // this.app.use(indexRoutes);
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'));
        console.log("Servidor con puerto: ", this.app.get('port'));
    }
}
const server = new Server();
server.start();
