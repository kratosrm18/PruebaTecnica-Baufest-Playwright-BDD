export class PIMPage {
    constructor(page) {
      this.page = page;
      this.botonEmployeeList = page.getByRole('link', {name: 'Employee List'}); 
      this.botonAddEmployee = page.getByRole('link', {name: 'Add Employee'}); 
      this.firstName = page.getByPlaceholder('First Name');
      this.middleName = page.getByPlaceholder('Middle Name');
      this.lastName = page.getByPlaceholder('Last Name');
      this.botonSave =  page.locator('//button[text()=" Save "]');
      this.botonSearch =  page.locator('//button[text()=" Search "]');
      this.employeeName = page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div/input');
  
    }
  
    async clickEmployeeList() {
      await this.botonEmployeeList.click();
    }s
  
    async clickAddEmployee() {
      await this.botonAddEmployee.click();
    }
  
    async ingresarFirstName(t) {
      await this.firstName.fill(t);
    }
  
    async ingresarMiddleName(t) {
      await this.middleName.fill(t);
    }
  
    async ingresarLastName(t) {
      await this.lastName.fill(t);
    }
  
    async ingresarEmployeeName(name) {
      await this.employeeName.fill(name);
    }
  
    async clickSave() {
      await this.botonSave.click();
    }
  
    async clickSearch() {
      await this.botonSearch.click();
    }
  };