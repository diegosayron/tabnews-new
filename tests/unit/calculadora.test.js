/*
test("nome do teste", callbackFunction);

function callbackFunction() {
    console.log("Essa função está sendo chamada!");
}
*/

//OU ASSIM, SABENDO QUE RUNNER TESTS SÃO CÓDIGOS QUE RODAM CÓDIGOS:

/*
test("nome do teste", function callbackFunction() {
    console.log("Assim também funciona!");
});
*/



/*
//OU ASSIM, MAIS ATUALMENTE, COM ARROW FUNCTIONS:
test("nome do teste", () => {
    console.log("E agora, com Arrow Functions?!?");
});

//Um novo teste:
test("um outro teste", () => {
    console.log("Um novo teste!");
});

*/


/*
test("espero que 1 seja 1", () => {
    expect(1).toBe(1);
});
*/


/*
test("teste calculadora", () => {
    expect($isso).toBe($aquilo);
});

*/

//Usando imports:
const calculadora = require("../../models/calculadora.js");

test("somar 2 + 2 deveria retornar 4", () => {
    const resultado = calculadora.somar(2,2);
    expect(resultado).toBe(4);
});