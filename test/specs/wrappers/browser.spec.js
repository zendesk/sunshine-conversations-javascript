import Smooch from '../../../src/wrappers/browser';

describe('Smooch', () => {
    it('should not have the webhooks API', () => {
        const smooch = new Smooch({
            jwt: 'jwt_nodecoding'
        });
        expect(smooch.webhooks).to.be.undefined;
    });

    it('should not have the JWT utils', () => {
        const smooch = new Smooch({
            jwt: 'jwt_nodecoding'
        });
        expect(smooch.utils.jwt).to.be.undefined;
    });

    it('should throw an error if key id is used', () => {
        try {
            new Smooch({
                keyId: 'keyId'
            });
        }
        catch (e) {
            e.message.should.contain('beforehand');
        }
    });

    it('should throw an error if secret is used', () => {
        try {
            new Smooch({
                secret: 'secret'
            });
        }
        catch (e) {
            e.message.should.contain('beforehand');
        }
    });

    it('should force appUser scope', () => {
        const s = new Smooch({appToken:'foo', scope: 'appMaker'});
        s.should.have.property('scope', 'appUser');
    });
});
