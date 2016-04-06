import { createReadStream } from 'streamifier';

import * as httpMock from '../../mocks/http';
import { getAuthenticationHeaders } from '../../../src/utils/auth';
import { ConversationsApi } from '../../../src/api/conversations';

describe('Conversations API', () => {
    const serviceUrl = 'http://some-url.com';
    const userId = 'user-id';
    const httpHeaders = getAuthenticationHeaders({
        appToken: 'token'
    });
    let httpSpy;
    let api;

    beforeEach(() => {
        httpSpy = httpMock.mock();
        api = new ConversationsApi(serviceUrl, httpHeaders);
    });

    afterEach(() => {
        httpMock.restore();
    });

    describe('#get', () => {
        it('should call http', () => {
            return api.get(userId).then(() => {
                const fullUrl = api.getFullURL('appUsers', userId, 'conversation');
                httpSpy.should.have.been.calledWith('GET', fullUrl, {}, httpHeaders);
            });
        });
    });

    describe('#sendMessage', () => {
        it('should call http', () => {
            const message = {
                text: 'this is a message'
            };

            return api.sendMessage(userId, message).then(() => {
                const fullUrl = api.getFullURL('appUsers', userId, 'conversation', 'messages');
                httpSpy.should.have.been.calledWith('POST', fullUrl, message, httpHeaders);
            });
        });
    });

    describe('#uploadImage', () => {
        it('should call http', () => {
            const fullUrl = api.getFullURL('appUsers', userId, 'conversation', 'images');
            const source = createReadStream('some source object');
            const message = {
                text: 'this is a message'
            };

            return api.uploadImage(userId, source, message).then(() => {
                httpSpy.args[0][0].should.eq('POST');
                httpSpy.args[0][1].should.eq(fullUrl);
                httpSpy.args[0][2].should.be.instanceof(FormData);
                httpSpy.args[0][3].should.eql(httpHeaders);
            });
        });
    });

    describe('#resetUnreadCount', () => {
        it('should call http', () => {
            return api.resetUnreadCount(userId).then(() => {
                const fullUrl = api.getFullURL('appUsers', userId, 'conversation', 'read');
                httpSpy.should.have.been.calledWith('POST', fullUrl, {}, httpHeaders);
            });
        });
    });
});
