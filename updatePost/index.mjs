import { getPost } from './utils/getPost.mjs';
import { updatePost } from './utils/updatePost.mjs';

export const handler = async (event) => {
    let response = {};

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

    const valuesToUpdate = {
        title: body.title,
        content: body.content
    };
    
    if (!valuesToUpdate.title && !valuesToUpdate.content) {
        response.statusCode = 400;
        response.body = JSON.stringify({ errorMessage: "Missing title or content to update." });
        return response;
    }

    await updatePost(post, valuesToUpdate);

    response.statusCode = 200;
    response.body = JSON.stringify({ message: "Post updated successfully." });

    return response;
};
