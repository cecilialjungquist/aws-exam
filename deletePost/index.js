import { deletePost } from './utils/deletePost.mjs';

export const handler = async (event) => {

    let response = {}

    const body = event.body ? JSON.parse(event.body) : {};
    const id = body.id;

    if (!id) {
        response.statusCode = 404;
        response.body = JSON.stringify({ errorMessage: "Missing id." });
        return response;
    } 
    
    await deletePost(id);

    response = {
        statusCode: 200,
        body: JSON.stringify("Post deleted successfully.")
    };

    return response;
};