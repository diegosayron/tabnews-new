import database from "infra/database.js";

async function status(request, response) {
    //DEPRECATED:
    //const result = await database.query('SELECT 1 = 1 as coluna_resultado, 1 + 1 as coluna_soma');
    //console.log(result.rows);

    //DATA E HORA
    const updatedAt = new Date().toISOString();
    
    //versão:
    const databaseVersionResult = await database.query('SHOW server_version;');
    const databaseVersionValue = databaseVersionResult.rows[0].server_version;
    
    //MAX CONNECTIONS:
    const databaseMaxConnections = await database.query('SHOW max_connections;');
    const databaseMaxConnectionsValue = databaseMaxConnections.rows[0].max_connections;

    //USED CONNECTIONS:
    const databaseName = process.env.POSTGRES_DB;
    const databaseOpenedConnectionsResult = await database.query({
      text: "select COUNT(*)::int from pg_stat_activity where datname = $1;",
      values: [databaseName]
    });
    const databaseOpenedConnectionsValue = databaseOpenedConnectionsResult.rows[0].count;                                  

    response.status(200).json({
        updated_at: updatedAt,
        dependencies: {
            database: {
                version: databaseVersionValue,
                max_connections: parseInt(databaseMaxConnectionsValue),
                opened_connections: parseInt(databaseOpenedConnectionsValue),
            }
        }
    });
}

export default status;