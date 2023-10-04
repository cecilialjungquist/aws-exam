import jwt from 'jsonwebtoken';

export const handler = async (event) => {

    let response = {
        policyDocument: {
            Version: '2012-10-17',
            Statement: [
                {
                    Action: 'execute-api:Invoke',
                    Effect: 'Deny',
                    Resource: event.methodArn,
                },
            ],
        },
    };

    try {
        let token = event.headers.authorization;

        if (!token) {
            return response;
        }

        token = token.replace('Bearer ', '');

        const decodedToken = jwt.verify(token, '123abc');

        if (decodedToken.role !== 'admin') {
            return response;
        }

        response.policyDocument.Statement[0].Effect = 'Allow';
        return response;
    } catch (error) {
        console.error('Token verification failed:', error);

        return response;
    }
};
