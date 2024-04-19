import { Request, Response } from 'express'
import pool from '../database'

class GamesController{

    public async list (req: Request, res: Response): Promise<void> {
        const games = await pool.query('SELECT * FROM games')
        res.json(games);

        //res.json({ text: 'Mostrando todos los juegos...'});
        //console.log('Mostrando todos los juegos');
    }

    public async getOne (req: Request, res: Response): Promise<any> { 
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM games WHERE id = ?', [ id ]);
        if(games.length > 0){
            return res.json(games[0]);
        }
        res.status(404).json({ message : 'Juego N0 encontrado'})
    }

    public async create (req: Request, res: Response): Promise<void> {         //colocamos async para decirle a la promesa (método) que será asincrono

        await pool.query('INSERT INTO games set ?', [req.body])     //con await le decimos que esa instrucción se tardará y que continué con lo demás
        res.json({ message: '¡Creado exitosamente!'});
        
        console.log('Se creó el siguiente registro: ');
        console.log(req.body)
    }

    public async update (req: Request, res: Response): Promise<void> { 
        const { id } = req.params 
        await pool.query('UPDATE games SET ? WHERE id = ?', [req.body, id])
        res.json({ message : "Juego actualizado"})
        console.log('Se actualizó el juego: ' + req.params.id);
    }

    public async delete (req: Request, res: Response): Promise<void> { 
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [ id ])
        res.json({ message : "Juego eliminado"})
        console.log('Se eliminó el juego: ' + req.params.id);
    }

    //FALTA AGREGAR VALIDACIONES : Json Web Tokens (JWT)
}

export const gamesController = new GamesController();

//const gamesController = new GamesController();
//export default gamesController;