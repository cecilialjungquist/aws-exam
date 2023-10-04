import { deletePost } from './utils/deletePost.mjs';
import { getPost } from './utils/getPost.mjs';

export const handler = async (event) => {

    let response = {}

    const body = event.body ? JSON.parse(event.body) : {};
    const id = body.id;

    if (!id) {
        response.statusCode = 400;
        response.body = JSON.stringify({ errorMessage: "Missing id." });
        return response;
    } 

    const post = await getPost(id);

    if (!post) {
        response.statusCode = 404;
        response.body = JSON.stringify({ errorMessage: "Post not found." });
        return response;
    }
    
    await deletePost(id);

    response = {
        statusCode: 200,
        body: JSON.stringify({ message: "Post deleted successfully." })
    };

    return response;
};