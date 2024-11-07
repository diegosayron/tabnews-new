import { Client } from 'pg';

async function query(queryObject) {
    const client = new Client({
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        connectionTimeoutMillis: 10000, // Timeout para a conexão
        ssl: {
            rejectUnauthorized: false // Para evitar problemas com certificados autoassinados
        }
    });
    try {
        await client.connect();
        console.log("Conectado ao banco de dados com sucesso!");
        const result = await client.query(queryObject);   //vamos passar um queryObject, que vem lá da assinatura do método  e vem pela função query.
                                                         //E guardaremos na variável result
        return result;
    } 
    catch(error) {
        console.error("Erro ao conectar ou executar a query:", error);
        throw error;
    }
    finally {
        await client.end(); //para finalizar a conexão          
        console.log("Conexão encerrada.");
    }
}


export default {
    query: query,
};