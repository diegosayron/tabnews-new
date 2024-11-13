import { Client } from 'pg';

async function query(queryObject) {
    const client = new Client({
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        ssl: getSSLValues(),
    });
    
    /*console.log(process.env.POSTGRES_HOST,
        process.env.POSTGRES_PORT,
        process.env.POSTGRES_USER,
        process.env.POSTGRES_PASSWORD,
        process.env.POSTGRES_DB);
        */

    try {
        await client.connect();
        console.log("Conectou ao banco");
        const result = await client.query(queryObject);   //vamos passar um queryObject, que vem lá da assinatura do método  e vem pela função query.
                                                         //E guardaremos na variável result
        console.log("Query Ok");
        return result;
    } 
    catch(error) {
        console.log("Ocorreu um erro: " + error);
        throw error;
    }
    finally {
        await client.end(); //para finalizar a conexão     
        console.log("Conexão fechada com sucesso!");     
    }
}


export default {
    query: query,
};


function getSSLValues() {
    //Dependendo do ambiente, se houver POSTGRES_CA, é porque é ambiente de produção.
    if (process.env.POSTGRES_CA) {
        return {
            ca: process.env.POSTGRES_CA,
        };
    }

    //Caso contrário, entra em outro return, local e sem ssl:
    return process.env.NODE_ENV === "development" ? false : true;
}