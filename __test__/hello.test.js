const helloMessage = require('../hello')

it('text string', () => {
    const name = 'Evercode!'
    expect(helloMessage(name)).toEqual('Hello,  Evercode!')
})

