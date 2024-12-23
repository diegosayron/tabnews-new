import database from "infra/database.js";

test("Get to api/v1/migrations must return 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/migrations");

    expect(response.status).toBe(200);

    const responseBody = await response.json();
    //espero receber uma lista de migrations que estão pendentes. Sendo uma lista, é um array:
    expect(Array.isArray(responseBody)).toBe(true);
    expect(responseBody.length).toBeGreaterThan(0);
});