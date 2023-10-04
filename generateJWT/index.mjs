import jwt from 'jsonwebtoken';

export const handler = async (event) => {

    let response = {};

    const body = event.body ? JSON.parse(event.body) : {};
    const user = body.user;
    const secretKey = '123abc';

    if (!user) {
        response.statusCode = 400;
        response.body = JSON.stringify({ errorMessage: "Unvalid body, must contain user." });
        return response;
    }

    try {

        const payload = {
            user,
            role: 'admin',
        };

        const token = jwt.sign(payload, secretKey, { expiresIn: '2h' });

        response.statusCode = 200;
        response.body = JSON.stringify({ token });
        return response;
    } catch (error) {
        console.error(error);

        response.statusCode = 500,
        response.body = JSON.stringify({ errorMessage: 'Opps! Something went wrong.' });
        return response;
    }
};
