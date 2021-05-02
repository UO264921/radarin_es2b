const {defineFeature, loadFeature}=require('jest-cucumber');
const feature = loadFeature('./features/admin-volver.feature');

defineFeature(feature, test => {
  
  beforeEach(async () => {
    await global.page.goto('http://localhost:3000')
  })

  test('El usuario hace click sobre volver para ir al login', ({when,then}) => {
    

    when('El usuario pulsa el enlace', async () => {
      await expect(page).toClick("a",{href: "/radmin"})
      await expect(page).toClick("a",{href: "/"})
    });

    then('Se espera que se cargue la pantalla de login', async () => {
        await expect(page).toMatch("Log in");
        await expect(page).toMatch("Accede como administrador");
    });
  });
});