// Engineer constructor 
const Engineer = require('../lib/Engineer');

// create engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Semaia', 1, 'semaia@gmail', 'semct');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// gets github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Semaia', 1, 'semaia@gmail', 'semct');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Semaia', 1, 'semaia@gmail', 'semct');

    expect(engineer.getRole()).toEqual("Engineer");
});