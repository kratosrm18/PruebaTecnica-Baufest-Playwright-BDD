# Prueba Tecnica para Baufest de Playwright-BDD

## Descripción

Proyecto de automatización web con el framework Playwright en Javascript siguiento el patrón de diseño POM y redacción de caso de prueba en lenguaje Gherking.

## Features

- **Registro de Empleado**: Se logea en la web OrangeHRM, se registra un usuario y se verifica que se haya añadido a la lista de empleados

## Requisitos/Instalación

1. **Instalar node.js y npm**:
   Descargar e instalar de: https://nodejs.org/en/download/package-manager

2. **Instalar VS code:**:
    Descargar e instalar de: https://code.visualstudio.com/download
    
3. **Descargar el código del repositorio y abrir la carpeta en VS Code**

4. **Ejecutar los siguientes comandos en la terminal de VS Code que instalarán las dependencias necesarias**
    npm init playwright@latest
    npm i -D playwright-bdd
    npm i -D @cucumber/cucumber@latest

5. **Para la ejecución de las pruebas ejecutar:**
    npx bddgen
    npx playwright test --ui
*Remover el --ui si no es necesario visualizar la ejecución en un navegador