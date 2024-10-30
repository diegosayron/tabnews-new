import { Client } from 'pg';

async function query(queryObject) {
    const client = new Client({
        host: 'localhost',
        port: 5433,
        user: 'postgres',
        password: '..Br11dg3..',
        database: 'postgres'
    });
    await client.connect();
    const result = await client.query(queryObject)   //vamos passar um queryObject, que vem lá da assinatura do método  e vem pela função query.
                                                     //E guardaremos na variável result
    await client.end(); //para finalizar a conexão          
    return result;
}


export default {
    query: query,
};

