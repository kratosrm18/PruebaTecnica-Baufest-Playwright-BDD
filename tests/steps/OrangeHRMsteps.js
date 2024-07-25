import { createBdd } from 'playwright-bdd';
import { test } from '../fixtures/fixture';
import { expect, selectors } from '@playwright/test';
import exp from 'constants';

const { Given, When, Then } = createBdd(test);
var nombre;
var apellido;

// 1. Missing step definition for "tests\features\OrangeHRM.feature:3:6"
Given('Usuario accede a {string}', async ({loginPage, page}, url) => {
  await loginPage.accederA(url);

});

// 2. Missing step definition for "tests\features\OrangeHRM.feature:4:6"
Given('Ingresa su usuario {string} y clave {string}', async ({loginPage, page}, usuario, clave) => {
    await loginPage.ingresarUsuario(usuario);
    await loginPage.ingresarClave(clave);
    await loginPage.clickLogin();
});

// 3. Missing step definition for "tests\features\OrangeHRM.feature:5:6"
When('Accede a PIM', async ({indexPage, page}) => {
    await indexPage.clickPIM();
});

// 4. Missing step definition for "tests\features\OrangeHRM.feature:6:6"
When('Selecciona boton Add', async ({pimPage, page}) => {
    await pimPage.clickAddEmployee();
});

// 5. Missing step definition for "tests\features\OrangeHRM.feature:7:6"
When('Ingresa los datos del empleado: First Name: {string}, Middle Name: {string}, Last Name: {string}', async ({pimPage, page}, first, middle, last) => {
    nombre = first + ' ' + middle;
    apellido = last;
    await pimPage.ingresarFirstName(first);
    await pimPage.ingresarMiddleName(middle);
    await pimPage.ingresarLastName(last);
});

// 6. Missing step definition for "tests\features\OrangeHRM.feature:8:6"
When('Selecciona Save', async ({pimPage, page}) => {
  // ...
  await pimPage.clickSave();
  await expect(page.locator('//*[text()="Successfully Saved"]')).toBeVisible();
});

// 7. Missing step definition for "tests\features\OrangeHRM.feature:9:6"
When('Accede a la lista de empleados', async ({pimPage, page}) => {
    await pimPage.clickEmployeeList();
  // ...
});

// 8. Missing step definition for "tests\features\OrangeHRM.feature:10:6"
Then('Se muestra el nuevo empleado en la lista', async ({pimPage, page}) => {
  // ...
    await pimPage.ingresarEmployeeName(nombre);
    await pimPage.clickSearch();
    await expect(page.locator('//div[text()="'+nombre+'"]/..//following-sibling::div//div[text()="'+apellido+'"]').first()).toBeVisible();
});