test("POST to api/v1/migrations must return 200", async () => {
    const response = await fetch("http://localhost:3000/api/v1/migrations", {
        method: "POST",
    });

    expect(response.status).toBe(200);

    const responseBody = await response.json();
    //espero receber uma lista de migrations que estão pendentes. Sendo uma lista, é um array:
    expect(Array.isArray(responseBody)).toBe(true);
});  