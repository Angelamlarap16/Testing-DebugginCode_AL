const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

// 1. Prueba para add()
test('add user to userController', () => {    
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
});

// 2. Pruebas para remove()
test('remove user from userController', () => {    
    let user = new User(1234, "Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user); 
});

test('Verifica intentar remover un usuario que no está', () => {
    let user = new User(12345, "Cristian", "cristian@generation.org");
    userController.remove(user); // Acción requerida antes de validar
    expect(userController.getUsers()).not.toContain(user);
});

// 3. Pruebas para findByEmail()
test('Verificar email de usuario', () => {
    let user = new User(123, "Dayana", "dayana@generation.org");
    userController.add(user);
    let usuarioEncontrado = userController.findByEmail("dayana@generation.org");
    expect(usuarioEncontrado.email).toEqual(user.email);
});

test('Verificar email de usuario que no existe (Caso de ausencia)', () => {
    let usuarioEncontrado = userController.findByEmail("noexiste@generation.org");
    expect(usuarioEncontrado).toBeUndefined();
});

// 4. Pruebas para findById()
test('Verificar encontrar usuario por ID', () => {
    let user = new User(999, "Angela", "angela@generation.org");
    userController.add(user);
    let usuarioEncontrado = userController.findById(999);
    expect(usuarioEncontrado.id).toEqual(user.id);
});

test('Verificar ID de usuario que no existe (Caso de ausencia)', () => {
    let usuarioEncontrado = userController.findById(0); // Cambiamos 000 por 0
    expect(usuarioEncontrado).toBeUndefined();
});

