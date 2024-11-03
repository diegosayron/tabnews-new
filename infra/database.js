import { Client } from 'pg';

async function query(queryObject) {
    const client = new Client({
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
    });
    try {
        await client.connect();
        const result = await client.query(queryObject);   //vamos passar um queryObject, que vem lá da assinatura do método  e vem pela função query.
                                                         //E guardaremos na variável result
        return result;
    } 
    catch(err) {
        console.log(err);
    }
    finally {
        await client.end(); //para finalizar a conexão          
    }
}


export default {
    query: query,
};

