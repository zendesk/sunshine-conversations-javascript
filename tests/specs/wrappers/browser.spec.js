describe('Smooch', () => {
  var Smooch = require('../../../src/wrappers/browser');

  it('should not have the webhooks API', () => {
    const smooch = new Smooch({
      jwt: 'jwt'
    });
    expect(smooch.webhooks).to.be.undefined;
  });

  it('should not have the JWT utils', () => {
    const smooch = new Smooch({
      jwt: 'jwt'
    });
    expect(smooch.utils.jwt).to.be.undefined;
  });

  it('should throw an error if key id is used', () => {
    try {
      const smooch = new Smooch({
        keyId: 'keyId'
      });
    }
    catch (e) {
      e.message.should.contain('beforehand');
    }
  });

  it('should throw an error if secret is used', () => {
    try {
      const smooch = new Smooch({
        secret: 'secret'
      });
    }
    catch (e) {
      e.message.should.contain('beforehand');
    }
  });
});
