/** Generated from: tests\features\OrangeHRM.feature */
import { test } from "../../../tests/fixtures/fixture.js";

test.describe("Prueba Tecnica OrangeHRM Baufest", () => {

  test("Validar empleado creado correctamente y en lista", async ({ Given, loginPage, page, And, When, indexPage, pimPage, Then }) => {
    await Given("Usuario accede a \"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login\"", null, { loginPage, page });
    await And("Ingresa su usuario \"Admin\" y clave \"admin123\"", null, { loginPage, page });
    await When("Accede a PIM", null, { indexPage, page });
    await And("Selecciona boton Add", null, { pimPage, page });
    await And("Ingresa los datos del empleado: First Name: \"Kalin\", Middle Name: \"Osorio\", Last Name: \"Delgadillo\"", null, { pimPage, page });
    await And("Selecciona Save", null, { pimPage, page });
    await And("Accede a la lista de empleados", null, { pimPage, page });
    await Then("Se muestra el nuevo empleado en la lista", null, { pimPage, page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("tests\\features\\OrangeHRM.feature"),
});

const testMetaMap = {
  "Validar empleado creado correctamente y en lista": {"pickleLocation":"2:5"},
};