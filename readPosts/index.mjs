import { readPosts } from './utils/readPosts.mjs';

export const handler = async (event) => {

    let response = {};

    try {
        const blogPosts = await readPosts();

        response.statusCode = 200;
        response.body = JSON.stringify({ blogPosts });
    } catch (error) {
        console.error(error);

        response.statusCode = 500;
        response.body = JSON.stringify({
            error: error,
            errorMessage: "Ooops! Something went wrong."
        })
    }

    return response;
};