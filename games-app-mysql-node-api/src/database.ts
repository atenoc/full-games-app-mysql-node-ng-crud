import mysql from 'promise-mysql'
import keys from './keys'

const pool = mysql.createPool(keys.database); // ejecuta el modulo de conexión de la BD


pool.getConnection()
        .then(connection => {
            pool.releaseConnection(connection);
            console.log('Conexion exitosa a la BD');
        });


export default pool;


//FALTAN VALIDACIONES EN CASO DE QUE OCURRA UN ERROR 

/*
pool.then((r: any) => r.getConnection().then((connection:any)=>{
    r.releaseConnection(connection);
    console.log('Conexion exitosa a la BD')
}));

export default pool;
*/
