import jwt from 'jsonwebtoken';

export const handler = async (event) => {

    let response = {};

    try {
        let token = event.headers.authorization;

        if (!token) {
            response.statusCode = 401;
            response.body = JSON.stringify({ message: 'No token provided.' });
            return response;
        }
        token = token.replace('Bearer ', '');

        const decodedToken = jwt.verify(token, '123abc');

        console.log('Decoded token:', decodedToken);

        response.statusCode = 200;
        response.body = JSON.stringify({ message: 'Token is valid', decodedToken });
        return response;

    } catch (error) {
        console.error('Token verification failed:', error);

        response.statusCode = 401;
        response.body = JSON.stringify({ message: 'Token is invalid' });
        return response;
    }
};



