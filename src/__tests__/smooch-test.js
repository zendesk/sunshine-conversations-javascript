jest.autoMockOff();

describe('Smooch', () => {
  describe('Node', () => {
    var Smooch = require('../wrappers/node');

    it('should have the webhooks API', () => {
      var smooch = new Smooch();
      expect(smooch.webhooks).toBeDefined();
    });

    it('should have the JWT utils', () => {
      var smooch = new Smooch();
      expect(smooch.utils.jwt).toBeDefined();
    });
  });

  describe('Browser', () => {
    var Smooch = require('../wrappers/browser');

    it('should not have the webhooks API', () => {
      var smooch = new Smooch();
      expect(smooch.webhooks).toBeUndefined();
    });

    it('should not have the JWT utils', () => {
      var smooch = new Smooch();
      expect(smooch.utils.jwt).toBeUndefined();
    });
  });
});
