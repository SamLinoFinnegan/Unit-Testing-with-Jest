const functions = require('./function.js');

test('Should be falsy', () => {
    expect(functions.isNull()).toBeFalsy();
})
test('Should be a string ', () => {
    expect(functions.checkValue(typeof "hello")).toBe('string');
})

test('Should be 10 ', () => {
    expect(functions.checkValue(10)).toBe(10);
})

test('checkValue Should be falsy when argument is undefined', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

test('User should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    });
});

// Less than or greater than
test('Should be under or equal to 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThan(1700);
});

// Regex
test('There is no I in team', () => {
    expect('team').not.toEqual(expect.stringContaining("I"));
});

test('There is no I in team', () => {
    expect('team').not.toMatch(/I/);
});
// Arrays
test('Admin should be in usernames', () => {
    usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
});