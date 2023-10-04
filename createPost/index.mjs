import { createPost } from './utils/createPost.mjs';

export const handler = async (event, context) => {

    let response = {};

    const body = event.body ? JSON.parse(event.body) : {};
    const title = body.title;
    const content = body.content;

    if (title && content) {
        const id = context.awsRequestId;
        const data = await createPost(id, title, content);

        response.statusCode = data.$metadata.httpStatusCode;
        response.body = JSON.stringify({ id, title, content });

    } else {

        response.statusCode = 400;
        response.body = JSON.stringify({ errorMessage: "Unvalid body in request." });
    }

    return response;
};
