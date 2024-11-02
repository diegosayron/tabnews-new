import database from "infra/database.js";

async function status(request, response) {
    const result = await database.query('SELECT 1 = 1 as coluna_resultado, 1 + 1 as coluna_soma');
    console.log(result.rows);
    response.status(200).json({ chave: "Somos acima da média!" });
}

export default status;