Feature: Prueba Tecnica OrangeHRM Baufest
    Scenario: Validar empleado creado correctamente y en lista
     Given Usuario accede a "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
     And Ingresa su usuario "Admin" y clave "admin123"
     When Accede a PIM
     And Selecciona boton Add
     And Ingresa los datos del empleado: First Name: "Kalin", Middle Name: "Osorio", Last Name: "Delgadillo"
     And Selecciona Save
     And Accede a la lista de empleados
     Then Se muestra el nuevo empleado en la lista