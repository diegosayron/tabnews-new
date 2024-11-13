import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migrations(request, response) {
    //DATA E HORA, se precisar
    //const updatedAt = new Date().toISOString();

    const migrations = await migrationRunner({
        databaseUrl: process.env.DATABASE_URL,
        dryRun: true,
        dir: join("infra", "migrations"),
        direction: "up",
        verbose: true,
        migrationsTable: "pgmigrations",
    });

    response.status(200).json(migrations);
}
