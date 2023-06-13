const hello = require('./hello')

it('text string', () => {
    const name = 'Evercode'
    const result = hello(name)
    expect(result).toBe('Hello, Evercode!')
})