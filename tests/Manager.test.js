// use Manager constructor 
const Manager = require('../lib/Manager');

// create manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Semaia', 1, 'semaia@gmail.com', 50);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// get role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Semaia', 1, 'semaia@gmail.com', 50);

    expect(manager.getRole()).toEqual("Manager");
}); 