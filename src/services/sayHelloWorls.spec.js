const sayHelloWorld = require('./sayHelloWorld');

describe('Say Hello', () => {

  it('Should say Hello World', () => {
    const response = sayHelloWorld.sayHello();
    expect(response).toBe('Hello World');
  });

  it('Should say Hello Amaury Victor', () => {
    const response = sayHelloWorld.sayHello('Amaury Victor');
    expect(response).toBe('Hello Amaury Victor');
  });
});